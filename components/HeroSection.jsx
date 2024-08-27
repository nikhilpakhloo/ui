"use client"
import React, { useState } from 'react';
import { PopularTags, Tabs } from '.';
import SearchBar from './SearchBar';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Apps');

  const getTabStyle = (tabName) => {
    switch (tabName) {
      case 'Apps':
        return activeTab === 'Apps'
          ? {
              buttonStyle: 'sm:px-6 px-3 py-2 rounded-full border bg-[#EBF6FF] border-[#aac2db]',
              textStyle: 'text-blue-800',
            }
          : { buttonStyle: '', textStyle: '' };
      case 'Agencies':
        return activeTab === 'Agencies'
          ? {
              buttonStyle: 'sm:px-6 px-3 py-2 rounded-full border bg-[#EBF6FF] border-[#aac2db]',
              textStyle: 'text-blue-800',
            }
          : { buttonStyle: '', textStyle: '' };
      case 'Themes':
        return activeTab === 'Themes'
          ? {
              buttonStyle: 'sm:px-6 px-3 py-2 rounded-full border bg-[#EBF6FF] border-[#aac2db]',
              textStyle: 'text-blue-800',
            }
          : { buttonStyle: '', textStyle: '' };
      case 'Services':
        return activeTab === 'Services'
          ? {
              buttonStyle: 'sm:px-6 px-3 py-2 rounded-full border bg-[#EBF6FF] border-[#aac2db]',
              textStyle: 'text-blue-800',
            }
          : { buttonStyle: '', textStyle: '' };
      default:
        return { buttonStyle: '', textStyle: '' };
    }
  };

  return (
    <section className='px-2 '>
      <div className='w-full  flex  my-8 md:my-14 flex-col items-center space-y-5 md:space-y-10 '>
        <h1 className='text-[#1b1b1b] text-3xl sm:text-4xl font-extrabold text-center'>Find the best Shopify apps</h1>
        <div className='flex flex-col space-y-6'>
        <div className='flex sm:space-x-10 space-x-5 justify-center '>
          <Tabs
            title='Apps'
            buttonStyle={getTabStyle('Apps').buttonStyle}
            textStyle={getTabStyle('Apps').textStyle}
            onClick={() => setActiveTab('Apps')}
          />
          <Tabs
            title='Agencies'
            buttonStyle={getTabStyle('Agencies').buttonStyle}
            textStyle={getTabStyle('Agencies').textStyle}
            onClick={() => setActiveTab('Agencies')}
          />
          <Tabs
            title='Themes'
            buttonStyle={getTabStyle('Themes').buttonStyle}
            textStyle={getTabStyle('Themes').textStyle}
            onClick={() => setActiveTab('Themes')}
          />
          <Tabs
            title='Services'
            buttonStyle={getTabStyle('Services').buttonStyle}
            textStyle={getTabStyle('Services').textStyle}
            onClick={() => setActiveTab('Services')}
          />
        </div>
        <div>

        <SearchBar/>
        </div>
        </div>
        <div className=''>
        <PopularTags/>

        </div>
      
       
    
      </div>
    </section>
  );
}
