import{
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
    product18,
    product19,
    product20,
    product21,
    product22,
    product23,
    product24,
    product25,
    product26,
    product27,
    product28,
    product29,
    product30,
    product31,
    product32,
    product33,
    product34,
    product35,
    product36,
    product37,
    product38,
    product39,
    product40,
    product41,
    product42,
    product43,
    product44,
    product45,
    product46,
    product47,
    product48,
    product49,
    product50,
    product51,
    product52,
    product53,
    product54,
    product55,
    product56,
    product57
} from './images'
const products = [
    {
        id: 1,
        productName: "Samsung Galaxy S21",
        productDescription: "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite",
        productPrice: 799.99,
        productImage: product1,
        category: "telephone&tablet"
    },
    {
        id: 2,
        productName: "Apple AirPods",
        productDescription: "Apple AirPods (2nd Generation)",
        productPrice: 152.00,
        productImage: product2,
        category: "electronic_accessories"
    },
    {
        id: 3,
        productName: "Samsung Galaxy S22 Ultra",
        productDescription: "Samsung Galaxy S22 Ultra Smartphone, Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black",
        productPrice: 1200.00,
        productImage: product3,
        category: "telephone&tablet"
    },
    {
        id: 4,
        productName: "Galaxy Watch 4",
        productDescription: "Samsung Electronics Galaxy Watch 4 44mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black",
        productPrice: 350.00,
        productImage: product4,
        category: "electronic_accessories"
    },
    {
        id: 5,
        productName: "Apple iPhone 12 Pro",
        productDescription: "Apple iPhone 12 Pro, 256GB, Graphite - Unlocked (Renewed Premium)",
        productPrice: 999.99,
        productImage: product5,
        category: "telephone&tablet"
    },
    {
        id: 6,
        productName: "ASUS TUF Dash 15",
        productDescription: "ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop, 15.6” 144Hz FHD, GeForce RTX 3050 Ti, Intel Core i7-11370H, 8GB DDR4, 512GB PCIe NVMe SSD, Wi-Fi 6, Windows 10, Eclipse Grey Color, TUF516PE-AB73",
        productPrice: 1400.00,
        productImage: product6,
        category: "computer&accessories"
    },
    {
        id: 7,
        productName: "CYBERPOWERPC Gamer Xtreme VR Gaming PC",
        productDescription: "CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)",
        productPrice: 1009.99,
        productImage: product7,
        category: "computer&accessories"
    },
    {
        id: 8,
        productName: "ASUS ROG Strix Scar 15 ",
        productDescription: "ASUS ROG Strix Scar 15 (2022) Gaming Laptop, 15.6” 300Hz IPS FHD Display, NVIDIA GeForce RTX 3070 Ti,Intel Core i9 12900H, 16GB DDR5, 1TB SSD, Per-Key RGB Keyboard, Windows 11 Home, G533ZW-AS94",
        productPrice: 1999.99,
        productImage: product8,
        category: "computer&accessories"
    },
    {
        id: 9,
        productName: "2021 Apple MacBook Pro",
        productDescription: "2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Gray",
        productPrice: 2689.99,
        productImage: product9,
        category: "computer&accessories"
    },
    {
        id: 10,
        productName: "ASUS VivoBook Flip 14",
        productDescription: "ASUS VivoBook Flip 14 Thin and Light 2-in-1 Laptop, 14” FHD Touch, 11th Gen Intel Core i3-1115G4, 4GB RAM, 128GB SSD, Thunderbolt 4, Fingerprint, Windows 10 Home in S Mode, Indie Black, TP470EA-AS34T",
        productPrice: 399.99,
        productImage: product10,
        category: "computer&accessories"
    },
    {
        id: 11,
        productName: "LG 27GN800-B Ultragear Gaming Monitor ",
        productDescription: "LG 27GN800-B Ultragear Gaming Monitor 27 QHD (2560 x 1440) IPS Display, IPS 1ms (GtG) Response Time, 144Hz Refresh Rate, NVIDIA G-SYNC Compatible, AMD FreeSync Premium - Black",
        productPrice: 291.00,
        productImage: product11,
        category: "computer&accessories"
    },
    {
        id: 12,
        productName: "GoPro HERO8 Black",
        productDescription: "GoPro HERO8 Black E-Commerce Packaging - Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization",
        productPrice: 289.99,
        productImage: product12,
        category: "camera&photography"
    },
    {
        id: 13,
        productName: "DJI RS 2 Combo",
        productDescription: "DJI RS 2 Combo - 3-Axis Gimbal Stabilizer for DSLR and Mirrorless Cameras, Nikon, Sony, Panasonic, Canon, Fuji, 10lbs Tested Payload, 1.4” Full-Color Touchscreen, Carbon Fiber Construction, Black",
        productPrice: 974.00,
        productImage: product13,
        category: "camera&photography"
    },
    {
        id: 14,
        productName: "Celestron - 70mm Travel Scope",
        productDescription: "Celestron - 70mm Travel Scope - Portable Refractor Telescope - Fully-Coated Glass Optics - Ideal Telescope for Beginners - BONUS Astronomy Software Package",
        productPrice: 96.32,
        productImage: product14,
        category: "camera&photography"
    },
    {
        id: 15,
        productName: "DJI Mavic Air 2 - Drone",
        productDescription: "DJI Mavic Air 2 - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time ActiveTrack 3.0 Ocusync 2.0, Gray",
        productPrice: 784.00,
        productImage: product15,
        category: "camera&photography"
    },
    {
        id: 16,
        productName: "Motorola One 5G Ace",
        productDescription: "Motorola One 5G Ace | 2021 | 2-Day battery | Unlocked | Made for US by Motorola | 6/128GB | 48MP Camera | Hazy Silver",
        productPrice: 399.99,
        productImage: product16,
        category: "telephone&tablet"
    },
    {
        id: 17,
        productName: "SAMSUNG Galaxy S20",
        productDescription: "SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Lavender",
        productPrice: 669.99,
        productImage: product17,
        category: "telephone&tablet"
    },
    {
        id: 18,
        productName: "Samsung Galaxy Z Fold 2",
        productDescription: "Samsung Galaxy Z Fold 2 5G | Factory Unlocked Android Cell Phone | 256GB Storage | US Version Smartphone Tablet | 2-in-1 Refined Design, Flex Mode | Mystic Bronze",
        productPrice: 1049.99,
        productImage: product18,
        category: "telephone&tablet"
    },
    {
        id: 19,
        productName: "Apple iPhone XR",
        productDescription: "Apple iPhone XR, 64GB, Black - Unlocked (Renewed Premium)",
        productPrice: 245.00,
        productImage: product19,
        category: "telephone&tablet"
    },
    {
        id: 20,
        productName: "Strathmore Sketch Pad",
        productDescription: "Strathmore (25-508 STR-025-508 100 Sheet Sketch Pad, 8.875 by 11",
        productPrice: 5.00,
        productImage: product20,
        category: "art&crafts"
    },
    {
        id: 21,
        productName: "Apple Watch Series 6",
        productDescription: "Apple Watch Series 6 (GPS, 40mm) - (Product) RED - Aluminum Case with (Product) RED - Sport Band",
        productPrice: 199.99,
        productImage: product21,
        category: "electronic_accessories"
    },
    {
        id: 22,
        productName: "XiaoMi True Wireless Earphones 2",
        productDescription: "XiaoMi True Wireless Earphones 2 Basic The new headphones have a longer battery life. With excellent sound quality, easy to adjust. White (international edition), Mi True Wireless Earphones 2 Basic",
        productPrice: 3975.00,
        productImage: product22,
        category: "electronic_accessories"
    },
    {
        id: 23,
        productName: "Redmi Buds 3 Lite",
        productDescription: "Xiaomi True Wireless Earbuds Redmi Buds 3 Lite, Bluetooth 5.2 Low Latency Stereo Game in-Ear Headphones with Mic, IP54 Water-Resistance Sweatproof Sport Earphones with Charging Case(Black)",
        productPrice: 35.00,
        productImage: product23,
        category: "electronic_accessories"
    },
    {
        id: 24,
        productName: "SAMSUNG Galaxy Z Flip 3",
        productDescription: "SAMSUNG Electronics Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 256GB Storage US Warranty, Phantom Black",
        productPrice: 999.99,
        productImage: product24,
        category: "telephone&tablet"
    },
    {
        id: 25,
        productName: "Google Nest WiFi Router 3",
        productDescription: "Google Nest WiFi Router 3 Pack (2nd Generation) – 4x4 AC2200 Mesh Wi-Fi Routers with 6600 Sq Ft Coverage",
        productPrice: 290.54,
        productImage: product25,
        category: "smarthome"
    },
    {
        id: 26,
        productName: "Apple Watch Series 7",
        productDescription: "Apple Watch Series 7 GPS, 45mm Midnight Aluminum Case with Midnight Sport Band - Regular",
        productPrice: 399.00,
        productImage: product26,
        category: "electronic_accessories"
    },
    {
        id: 27,
        productName: "DAS Air-Hardening Modeling Clay",
        productDescription: "DAS Air-Hardening Modeling Clay, 2.2 Lb. Block, White Color (387500)",
        productPrice: 3.99,
        productImage: product27,
        category: "art&crafts"
    },
    {
        id: 28,
        productName: "Xiaomi Mi Smart Watch Lite Black",
        productDescription: "Xiaomi Mi Smart Watch Lite Black- 1.4 Inch Touch Screen, 5ATM Water Resistant, 9 Days Battery Life, GPS, 11 Sports Mode, Steps, Sleep and Heart Rate Monitor, Fitness Activity Tracker [Official UK]",
        productPrice: 70.14,
        productImage: product28,
        category: "electronic_accessories"
    },
    {
        id: 29,
        productName: "Apple Watch SE (GPS, 40mm)",
        productDescription: "Apple Watch SE (GPS, 40mm) - Gold Aluminum Case with Starlight Sport Band",
        productPrice: 279.00,
        productImage: product29,
        category: "electronic_accessories"
    },
    {
        id: 30,
        productName: "Xiaomi Mi 10T",
        productDescription: "Xiaomi Mi 10T - Smartphone 6 GB + 128 GB, Dual Sim, Alexa Hands-Free, Nero (Cosmic Black)",
        productPrice: 358.50,
        productImage: product30,
        category: "telephone&tablet"
    },
    {
        id: 31,
        productName: "Xiaomi Mi Band 5",
        productDescription: "Xiaomi Mi Band 5 Smart Wristband 1.1 inch Color Screen Miband with Magnetic Charging 11 Sports Modes Remote Camera Bluetooth 5.0 Global Version - Black",
        productPrice: 42.99,
        productImage: product31,
        category: "electronic_accessories"
    },
    {
        id: 32,
        productName: "Pacon UCreate Poly Cover Sketch Book",
        productDescription: "Pacon UCreate Poly Cover Sketch Book, 9 x 6, Heavyweight 75 Sheets",
        productPrice: 3.99,
        productImage: product32,
        category: "art&crafts"
    },
    {
        id: 33,
        productName: "OnePlus Nord N200 ",
        productDescription: "OnePlus Nord N200 | 5G Unlocked Android Smartphone U.S Version | 6.49 Full HD+LCD Screen | 90Hz Smooth Display | Large 5000mAh Battery | Fast Charging | 64GB Storage | Triple Camera,Blue Quantum",
        productPrice: 239.99,
        productImage: product33,
        category: "telephone&tablet"
    },
    {
        id: 34,
        productName: "Polaroid Originals Now I-Type Instant Camera",
        productDescription: "Polaroid Originals Now I-Type Instant Camera - Black (9028)",
        productPrice: 119.99,
        productImage: product34,
        category: "camera&photography"
    },
    {
        id: 35,
        productName: "BENGOO G9000 Stereo Gaming Headset",
        productDescription: "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games",
        productPrice: 38.99,
        productImage: product35,
        category: "electronic_accessories"
    },
    {
        id: 36,
        productName: "Telescope 80mm Aperture 600mm",
        productDescription: "Telescope 80mm Aperture 600mm - Astronomical Portable Refracting Telescope Fully Multi-coated High Transmission Coatings AZ Mount with Tripod Phone Adapter, Wireless Control, Carrying Bag. Easy Set Up",
        productPrice: 139.99,
        productImage: product36,
        category: "camera&photography"
    },
    {
        id: 37,
        productName: "Sigma 16mm",
        productDescription: "Sigma 16mm f/1.4 DC DN Contemporary Lens for Sony E (402965)",
        productPrice: 374.00,
        productImage: product37,
        category: "camera&photography"
    },
    {
        id: 38,
        productName: "HyperX Cloud Stinger",
        productDescription: "HyperX Cloud Stinger – Gaming Headset, Lightweight, Comfortable Memory Foam, Swivel to Mute Noise-Cancellation Microphone, Works on PC, PS4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch and Mobile",
        productPrice: 45.00,
        productImage: product38,
        category: "electronic_accessories"
    },
    {
        id: 39,
        productName: "Panasonic LUMIX FZ300",
        productDescription: "Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X F2.8 Zoom Lens - DMC-FZ300K - (Black) USA",
        productPrice: 597.99,
        productImage: product39,
        category: "camera&photography"
    },
    {
        id: 40,
        productName: "MSI GS76 Stealth Gaming Laptop",
        productDescription: "MSI GS76 Stealth Gaming Laptop: 17.3 4K Display, Intel Core i9-11900H, NVIDIA GeForce RTX 3080, 64GB, 2TB SSD, Thunderbolt 4, WiFi 6, Win10, Black(11UH-078)",
        productPrice: 3499.00,
        productImage: product40,
        category: "computer&accessories"
    },
    {
        id: 41,
        productName: "C by GE A19 Smart LED Light Bulb",
        productDescription: "C by GE A19 Smart LED Light Bulb, 60W Replacement, Bluetooth/Wi-Fi Enabled, Alexa + Google Home Compatible Without Hub, Soft White, 2-Pack (Packaging May Vary)",
        productPrice: 93.96,
        productImage: product41,
        category: "smarthome"
    },
    {
        id: 42,
        productName: "Crayola Crayons, Colors",
        productDescription: "Crayola Crayons, Colors May Vary, Art Tools for Kids, 32 Count",
        productPrice: 6.99,
        productImage: product42,
        category: "art&crafts"
    },
    {
        id: 43,
        productName: "Echo Dot (3rd Gen, 2018 release)",
        productDescription: "Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal",
        productPrice: 39.99,
        productImage: product43,
        category: "smarthome"
    },
    {
        id: 44,
        productName: "Facebook Portal Plus",
        productDescription: "Facebook Portal Plus - Smart Video Calling 15.6” Touch Screen Display with Alexa - Black",
        productPrice: 170.00,
        productImage: product44,
        category: "smarthome"
    },
    {
        id: 45,
        productName: "Xiaomi Mi Band 6",
        productDescription: "Xiaomi Mi Band 6 Activity Tracker High-Res 1.56 AMOLED Screen, SpO2 Monitor, 30 Sports Modes, 24HR Heart Rate and Sleep Monitor Smart Watch",
        productPrice: 44.00,
        productImage: product45,
        category: "electronic_accessories"
    },
    {
        id: 46,
        productName: "61 Colors Alcohol Markers",
        productDescription: "61 Colors Alcohol Markers Brush Tip anngrowy Art Markers for Adult Coloring Colored Markers for Artists School Kids Drawing Sketch Dual Tip Brush Markers Pens Alcohol-Based Professional Art Supplies",
        productPrice: 26.99,
        productImage: product46,
        category: "art&crafts"
    },
    {
        id: 47,
        productName: "Wyze Cam Pan 1080p",
        productDescription: "Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White - WYZECP1",
        productPrice: 70.00,
        productImage: product47,
        category: "smarthome"
    },
    {
        id: 48,
        productName: "Logitech MX Master 2S Wireless Mouse",
        productDescription: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite (Discontinued by Manufacturer)",
        productPrice: 43.99,
        productImage: product48,
        category: "computer&accessories"
    },
    {
        id: 49,
        productName: "Arteza Art Alcohol Markers",
        productDescription: "Arteza Art Alcohol Markers, Set of 36, Grayscale, Blendable, Medium Chisel and Fine Tip, Markers for Adult Coloring and Sketching",
        productPrice: 33.00,
        productImage: product49,
        category: "art&crafts"
    },
    {
        id: 50,
        productName: "Wireless Gaming Mouse",
        productDescription: "Wireless Gaming Mouse Up to 10000 DPI, UHURU Rechargeable USB Wireless Mouse with 6 Buttons 7 Changeable LED Color Ergonomic Programmable MMO RPG for PC Laptop, Compatible with Windows Mac",
        productPrice: 25.99,
        productImage: product50,
        category: "computer&accessories"
    },
    {
        id: 51,
        productName: "Logitech MK270 Wireless Keyboard and Mouse",
        productDescription: "Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for PC, Laptop, Black",
        productPrice: 29.99,
        productImage: product51,
        category: "computer&accessories"
    },
    {
        id: 52,
        productName: "Apple iPhone Xs",
        productDescription: "Apple iPhone Xs, 256GB, Space Gray - Fully Unlocked (Renewed Premium)",
        productPrice: 325.00,
        productImage: product52,
        category: "telephone&tablet"
    },
    {
        id: 53,
        productName: "DJI FPV Combo - First-Person View Drone",
        productDescription: "DJI FPV Combo - First-Person View Drone UAV Quadcopter with 4K Camera, S Flight Mode, Super-Wide 150° FOV, HD Low-Latency Transmission, Emergency Brake and Hover, Gray",
        productPrice: 769.08,
        productImage: product53,
        category: "camera&photography"
    },
    {
        id: 54,
        productName: "Lenovo Flex 5 Laptop",
        productDescription: "Lenovo Flex 5 Laptop, 14.0 FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home",
        productPrice: 619.00,
        productImage: product54,
        category: "computer&accessories"
    },
    {
        id: 55,
        productName: "SkyTech Shadow Gaming Computer PC Desktop",
        productDescription: "SkyTech Shadow Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, 1660 Super 6G, 1TB SSD, 16GB DDR4 3000, RGB Fans, AC WiFi, Windows 10 Home 64-bit, Black",
        productPrice: 1199.99,
        productImage: product55,
        category: "computer&accessories"
    },
    {
        id: 56,
        productName: "Art 101 Doodle and Color 142 Pc Art Set in a Wood Carrying Case",
        productDescription: "Art 101 Doodle and Color 142 Pc Art Set in a Wood Carrying Case, Includes 24 Premium Colored Pencils, A variety of coloring and painting mediums: crayons, oil pastels, watercolors; Portable Art Studio",
        productPrice: 16.54,
        productImage: product56,
        category: "art&crafts"
    },
    {
        id: 57,
        productName: "Lenovo IdeaCentre AIO 3 AMD All-in-One Computer",
        productDescription: "Lenovo IdeaCentre AIO 3 AMD All-in-One Computer, 24 FHD Display, Ryzen 5 5500U, 16GB RAM, 512GB SSD, DVD RW Drive, Windows 11",
        productPrice: 789.00,
        productImage: product57,
        category: "computer&accessories"
    }
]
export default products; 