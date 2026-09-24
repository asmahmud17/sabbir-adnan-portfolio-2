// =====================================================================
// SABBIR ADNAN — PORTFOLIO CONFIGURATION
// Edit all site content here. No need to touch index.html or main.js
// =====================================================================

const PORTFOLIO_CONFIG = {

    // ─── PERSONAL ────────────────────────────────────────────────────
    name:       "Sabbir Adnan",
    tagline:    "Telling Stories Through Every Frame",
    logoPath:   "assets/images/logo.png",   // ← swap logo image here
    photoPath:  "assets/images/about-photo.jpg", // ← swap photo here

    // ─── BIO ─────────────────────────────────────────────────────────
    // Edit the bio text freely between the quotes
    bio: `Hi, I'm <strong>Sabbir Adnan</strong>, a Professional Video Editor and Graphic Designer with <strong>1 year of experience</strong> in the creative field. I enjoy transforming ordinary footage into engaging, dynamic, and visually appealing videos that effectively connect with the audience.
<br/><br/>
I specialize in creating <strong>Social Media Videos, Reels, Promotional Videos, Talking Head Content, and Storytelling Videos</strong>. I also use my graphic design skills to enhance the visuals, typography, and overall presentation of my videos.
<br/><br/>
<em>With creativity, a passion for learning, and a commitment to quality, I strive to bring every project to life in a unique and engaging way.</em>`,

    // ─── COLORS & FONTS ─────────────────────────────────────────────
    accentColor:  "#B51AFF",
    fontHeadings: "'Montserrat', sans-serif",
    fontBody:     "'Inter', sans-serif",

    // ─── VIDEO EDITING CAROUSEL ──────────────────────────────────────
    // Categories allowed: Motion | Storytelling | Podcast | Social Content | Reels
    videoProjects: [
        {
            category:  "Motion",
            thumbnail: "assets/images/proj-1.jpg",
            url:       "https://youtube.com/playlist?list=PLCbN6Yaq5FOM&si=ezBjiJqeeyTOjyYs",
            title:     "Motion Project Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Storytelling",
            thumbnail: "assets/images/proj-2.jpg",
            url:       "https://youtube.com/playlist?list=PLRqr_WiPbrmY&si=3r6ZGQ4enxrU9vvj",
            title:     "Storytelling Project Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Podcast",
            thumbnail: "assets/images/proj-3.jpg",
            url:       "https://youtube.com/playlist?list=PLFtPV0z3edUw&si=_y6sKsXPBR0EXm3q",
            title:     "Podcast Project Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Social Content",
            thumbnail: "assets/images/proj-4.jpg",
            url:       "https://youtube.com/your-link-here",
            title:     "Social Content Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Reels",
            thumbnail: "assets/images/proj-5.jpg",
            url:       "https://youtube.com/playlist?list=PLdmGpNZyw04s&si=qrBJIZtS3I6kOPOQ",
            title:     "Reels Project Title",
            subtitle:  "Short description here"
        }
    ],

    // ─── GRAPHIC DESIGN CAROUSEL ─────────────────────────────────────
    // Categories allowed: Poster | Calligraphy | Thumbnail | Social Media
    designProjects: [
        {
            category:  "Poster",
            thumbnail: "assets/images/proj-1.jpg",
            url:       "https://www.behance.net/gallery/224277165/Portfolio-part-1",
            title:     "Poster Project Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Calligraphy",
            thumbnail: "assets/images/proj-2.jpg",
            url:       "https://www.behance.net/gallery/220403237/book-cover-design",
            title:     "Calligraphy Project Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Thumbnail",
            thumbnail: "assets/images/proj-3.jpg",
            url:       "https://www.behance.net/gallery/254889965/Thumnell-Design",
            title:     "Thumbnail Project Title",
            subtitle:  "Short description here"
        },
        {
            category:  "Social Media",
            thumbnail: "assets/images/proj-4.jpg",
            url:       "https://www.behance.net/gallery/254106451/Marketing-Ad-Design",
            title:     "Social Media Project Title",
            subtitle:  "Short description here"
        }
    ],

    // ─── SKILL PROOF LINKS ──────────────────────────────────────────
    skillLinks: [
        {
            platform: "YouTube",
            subtitle:  "Video Editing Proof",
            desc:      "Video editing projects, visual cuts, sequence pacing, and video tutorials.",
            // ADD GOOGLE DRIVE LINK HERE — change url from "#" to your link
            url:       "https://youtube.com/@sabbiradnan-ym7xw",
            linked:    true,
            icon:      "yt"
        },
        {
            platform: "Behance",
            subtitle:  "Graphic Design Showcase",
            desc:      "Graphic design showcase, poster layouts, visual branding, and social posts.",
            url:       "https://www.behance.net/sabbiradnan96",
            linked:    true,
            icon:      "be"
        },
        {
            platform: "Facebook",
            subtitle:  "Social Community",
            desc:      "Creative project updates, social media posts, design previews, and outreach.",
            url:       "https://www.facebook.com/sabbiradnan390",
            linked:    true,
            icon:      "fb"
        },
        {
            platform: "Google Drive",
            subtitle:  "Source Files & Vault",
            desc:      "Direct link to raw video render samples, PSD/AI design sources, work archives.",
            // ADD GOOGLE DRIVE LINK HERE ↓
            url:       "https://drive.google.com/drive/folders/1vd-D6bXq5uHa2B6Qitih_k1wTD-a9QVS?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
            linked:    true,
            icon:      "gd"
        },
        {
            platform: "Telegram",
            subtitle:  "Channel & Resources",
            desc:      "Announcements, creative asset shares, video editing packs, and updates.",
            url:       "https://t.me/Sabbir_7396",
            linked:    true,
            icon:      "tg"
        }
    ],

    // ─── CONTACT LINKS ──────────────────────────────────────────────
    contactLinks: [
        { label: "Email",     hint: "Drop me an email",    url: "mailto:sabbiradnan@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Sabbir%20Adnan&body=Hi%20Sabbir%2C%20I%27d%20like%20to%20work%20with%20you.", icon: "email" },
        { label: "Instagram", hint: "Follow my journey",   url: "https://www.instagram.com/sabbiradnan39120/?hl=en", icon: "ig" },
        { label: "Facebook",  hint: "Connect with me",     url: "https://www.facebook.com/sabbiradnan390", icon: "fb" },
        { label: "WhatsApp",  hint: "Chat directly",       url: "https://wa.me/8801607310024",            icon: "wa" },
        { label: "Telegram",  hint: "Join my channel",     url: "https://t.me/Sabbir_7396",              icon: "tg" }
    ]
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
