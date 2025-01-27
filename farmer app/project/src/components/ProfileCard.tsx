import React from 'react';
import { User, Star, Mail, Phone } from 'lucide-react';
import { Farmer, Company, Vendor } from '../types';

interface ProfileCardProps {
  profile: Farmer | Company | Vendor;
  type: 'farmer' | 'company' | 'vendor';
}

export function ProfileCard({ profile, type }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-32 bg-green-600">
        <img
          src={type === 'company' ? (profile as Company).logo : profile.profileImage}
          alt={profile.name}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
        />
      </div>
      <div className="pt-16 p-6">
        <h3 className="text-xl font-semibold text-center mb-2">{profile.name}</h3>
        <p className="text-gray-600 text-center mb-4">{profile.description}</p>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          {'rating' in profile && (
            <div className="flex items-center gap-1">
              <Star className="text-yellow-400" size={16} fill="currentColor" />
              <span className="text-sm font-medium">{profile.rating}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            <span className="text-sm">{profile.contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            <span className="text-sm">{profile.contactInfo.phone}</span>
          </div>
        </div>

        {'certifications' in profile && profile.certifications && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {profile.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {'verificationStatus' in profile && (
          <div className="mt-4 flex items-center justify-center">
            <span className={`px-3 py-1 rounded-full text-sm ${
              profile.verificationStatus === 'verified'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {profile.verificationStatus.charAt(0).toUpperCase() + profile.verificationStatus.slice(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}