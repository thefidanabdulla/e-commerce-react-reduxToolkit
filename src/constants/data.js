import {airPod, galaxyS21, galaxyS22,galaxyWatch4, macbookPro, asusRogStrix, asusVivobook, asusTuff, goPro, calestronTelescope, cyberPowerGamer, comboGimbal, iphone12Pro, lgMonitor, drone } from './images'

const products = [
    {
        id: 1,
        productName: "Samsung Galaxy S21",
        productDescription: "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite",
        productPrice: 799.99,
        productImage: galaxyS21,
        category: "electronic"
    },
    {
        id: 2,
        productName: "Apple AirPods",
        productDescription: "Apple AirPods (2nd Generation)",
        productPrice: 152.00,
        productImage: airPod,
        category: "electronic"
    },
    {
        id: 3,
        productName: "Samsung Galaxy S22 Ultra",
        productDescription: "Samsung Galaxy S22 Ultra Smartphone, Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black",
        productPrice: 1200.00,
        productImage: galaxyS22,
        category: "electronic"
    },
    {
        id: 4,
        productName: "Galaxy Watch 4",
        productDescription: "Samsung Electronics Galaxy Watch 4 44mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black",
        productPrice: 350.00,
        productImage: galaxyWatch4,
        category: "electronic"
    },
    {
        id: 5,
        productName: "Apple iPhone 12 Pro",
        productDescription: "Apple iPhone 12 Pro, 256GB, Graphite - Unlocked (Renewed Premium)",
        productPrice: 999.99,
        productImage: iphone12Pro,
        category: "electronic"
    },
    {
        id: 6,
        productName: "ASUS TUF Dash 15",
        productDescription: "ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop, 15.6” 144Hz FHD, GeForce RTX 3050 Ti, Intel Core i7-11370H, 8GB DDR4, 512GB PCIe NVMe SSD, Wi-Fi 6, Windows 10, Eclipse Grey Color, TUF516PE-AB73",
        productPrice: 1400.00,
        productImage: asusTuff,
        category: "electronic"
    },
    {
        id: 7,
        productName: "CYBERPOWERPC Gamer Xtreme VR Gaming PC",
        productDescription: "CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)",
        productPrice: 1009.99,
        productImage: cyberPowerGamer,
        category: "electronic"
    },
    {
        id: 8,
        productName: "ASUS ROG Strix Scar 15 ",
        productDescription: "ASUS ROG Strix Scar 15 (2022) Gaming Laptop, 15.6” 300Hz IPS FHD Display, NVIDIA GeForce RTX 3070 Ti,Intel Core i9 12900H, 16GB DDR5, 1TB SSD, Per-Key RGB Keyboard, Windows 11 Home, G533ZW-AS94",
        productPrice: 1999.99,
        productImage: asusRogStrix,
        category: "electronic"
    },
    {
        id: 9,
        productName: "2021 Apple MacBook Pro",
        productDescription: "2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Gray",
        productPrice: 2689.99,
        productImage: macbookPro,
        category: "electronic"
    },
    {
        id: 10,
        productName: "ASUS VivoBook Flip 14",
        productDescription: "ASUS VivoBook Flip 14 Thin and Light 2-in-1 Laptop, 14” FHD Touch, 11th Gen Intel Core i3-1115G4, 4GB RAM, 128GB SSD, Thunderbolt 4, Fingerprint, Windows 10 Home in S Mode, Indie Black, TP470EA-AS34T",
        productPrice: 399.99,
        productImage: asusVivobook,
        category: "electronic"
    },
    {
        id: 11,
        productName: "LG 27GN800-B Ultragear Gaming Monitor ",
        productDescription: "LG 27GN800-B Ultragear Gaming Monitor 27 QHD (2560 x 1440) IPS Display, IPS 1ms (GtG) Response Time, 144Hz Refresh Rate, NVIDIA G-SYNC Compatible, AMD FreeSync Premium - Black",
        productPrice: 291.00,
        productImage: lgMonitor,
        category: "electronic"
    },
    {
        id: 12,
        productName: "GoPro HERO8 Black",
        productDescription: "GoPro HERO8 Black E-Commerce Packaging - Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization",
        productPrice: 289.99,
        productImage: goPro,
        category: "electronic"
    },
    {
        id: 13,
        productName: "DJI RS 2 Combo",
        productDescription: "DJI RS 2 Combo - 3-Axis Gimbal Stabilizer for DSLR and Mirrorless Cameras, Nikon, Sony, Panasonic, Canon, Fuji, 10lbs Tested Payload, 1.4” Full-Color Touchscreen, Carbon Fiber Construction, Black",
        productPrice: 974.00,
        productImage: comboGimbal,
        category: "electronic"
    },
    {
        id: 14,
        productName: "Celestron - 70mm Travel Scope",
        productDescription: "Celestron - 70mm Travel Scope - Portable Refractor Telescope - Fully-Coated Glass Optics - Ideal Telescope for Beginners - BONUS Astronomy Software Package",
        productPrice: 96.32,
        productImage: calestronTelescope,
        category: "electronic"
    },
    {
        id: 15,
        productName: "DJI Mavic Air 2 - Drone",
        productDescription: "DJI Mavic Air 2 - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time ActiveTrack 3.0 Ocusync 2.0, Gray",
        productPrice: 784.00,
        productImage: drone,
        category: "electronic"
    }
]
export default products;