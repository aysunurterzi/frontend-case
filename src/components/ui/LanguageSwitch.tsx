import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch: React.FC = () => {
    const { i18n, t } = useTranslation();

    const currentLanguage = i18n.language || 'en';
    const isTurkish = currentLanguage === 'tr';

    const toggleLanguage = () => {
        const newLanguage = isTurkish ? 'en' : 'tr';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="fixed top-6 right-12 z-50">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-2 hover:shadow-xl transition-all duration-200 flex items-center justify-center">
                <div 
                    className="relative inline-flex items-center h-8 w-16 cursor-pointer group"
                    onClick={toggleLanguage}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleLanguage();
                        }
                    }}
                    aria-label={t('navigation.language')}
                >
                    {/* Background track */}
                    <div className={`
                        absolute inset-0 rounded-lg transition-colors duration-200
                        ${isTurkish 
                            ? 'bg-gradient-to-r from-red-500 to-red-600' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }
                    `} />
                    
                    {/* Moving toggle */}
                    <div className={`
                        absolute top-1 left-1 w-6 h-6 bg-white rounded-md shadow-md
                        transform transition-transform duration-200 ease-out
                        ${isTurkish ? 'translate-x-8' : 'translate-x-0'}
                        flex items-center justify-center
                    `}>
                        <span className="text-xs font-bold text-gray-700">
                            {isTurkish ? 'TR' : 'EN'}
                        </span>
                    </div>
                    
                    {/* Static labels */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                        <span className={`
                            text-xs font-semibold transition-colors duration-200
                            ${!isTurkish ? 'text-transparent' : 'text-white'}
                        `}>
                            EN
                        </span>
                        <span className={`
                            text-xs font-semibold transition-colors duration-200
                            ${isTurkish ? 'text-transparent' : 'text-white'}
                        `}>
                            TR
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitch; 