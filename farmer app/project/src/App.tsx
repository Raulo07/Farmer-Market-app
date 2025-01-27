import React, { useState, useEffect } from 'react';
import { MapPin, Store, Users, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './components/SearchBar';
import { MarketCard } from './components/MarketCard';
import { ProfileCard } from './components/ProfileCard';
import { RequirementCard } from './components/RequirementCard';
import { ProductCard } from './components/ProductCard';
import { Map } from './components/Map';
import { markets, farmers, companies, vendors } from './data';
import { Market, UserRole, Location } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [activeTab, setActiveTab] = useState<'markets' | 'farmers' | 'companies' | 'vendors'>('markets');
  const [userRole, setUserRole] = useState<UserRole>('consumer');
  const [mapCenter, setMapCenter] = useState<Location>({ lat: 40.7128, lng: -74.0060 });

  // Filter available tabs based on user role
  const getAvailableTabs = () => {
    switch (userRole) {
      case 'farmer':
        return ['markets', 'vendors', 'companies'];
      case 'vendor':
        return ['farmers', 'companies'];
      case 'company':
        return ['farmers', 'vendors'];
      default:
        return ['markets', 'farmers', 'companies', 'vendors'];
    }
  };

  // Reset active tab if it's not available for current role
  useEffect(() => {
    if (!getAvailableTabs().includes(activeTab)) {
      setActiveTab(getAvailableTabs()[0]);
    }
  }, [userRole]);

  const filteredMarkets = markets.filter(market =>
    market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMapLocations = () => {
    switch (activeTab) {
      case 'markets':
        return markets.map(market => ({
          position: market.location,
          title: market.name
        }));
      case 'farmers':
        return farmers.map(farmer => ({
          position: farmer.coordinates,
          title: farmer.name
        }));
      case 'companies':
        return companies.map(company => ({
          position: company.location,
          title: company.name
        }));
      case 'vendors':
        return vendors.map(vendor => ({
          position: vendor.location,
          title: vendor.name
        }));
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin className="text-green-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Farmers Market Finder</h1>
          </motion.div>

          {/* Role Selector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">View As:</label>
            <div className="flex gap-4">
              {(['consumer', 'farmer', 'vendor', 'company'] as UserRole[]).map((role) => (
                <motion.button
                  key={role}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setUserRole(role)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    userRole === role
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <SearchBar onSearch={setSearchQuery} />

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4 mt-6"
          >
            {getAvailableTabs().map(tab => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab === 'markets' && <Store size={20} />}
                {tab === 'farmers' && <Users size={20} />}
                {tab === 'companies' && <Building2 size={20} />}
                {tab === 'vendors' && <Store size={20} />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-lg overflow-hidden shadow-lg"
        >
          <Map
            locations={getMapLocations()}
            center={mapCenter}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'markets' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMarkets.map(market => (
                  <motion.div
                    key={market.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MarketCard
                      market={market}
                      onClick={setSelectedMarket}
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'farmers' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {farmers.map(farmer => (
                  <motion.div
                    key={farmer.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <ProfileCard profile={farmer} type="farmer" />
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Available Products</h3>
                      {farmer.products.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          showBulkOptions={userRole === 'company'}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'companies' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map(company => (
                  <motion.div
                    key={company.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <ProfileCard profile={company} type="company" />
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Buying Requirements</h3>
                      {company.requirements.map(requirement => (
                        <RequirementCard key={requirement.id} requirement={requirement} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'vendors' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map(vendor => (
                  <motion.div
                    key={vendor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <ProfileCard profile={vendor} type="vendor" />
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Available Products</h3>
                      {vendor.products.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          showBulkOptions={userRole === 'company'}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {filteredMarkets.length === 0 && activeTab === 'markets' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No markets found matching your search.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;