# Content Update Guide

This guide will help you update the content on your website without touching any code. All the text, images, and data are stored in simple JSON files in the `content` folder.

## Table of Contents
- [What is JSON?](#what-is-json)
- [Where are the Content Files?](#where-are-the-content-files)
- [How to Update Content](#how-to-update-content)
- [Important Rules](#important-rules)
- [Updating Each Section](#updating-each-section)

---

## What is JSON?

JSON files are simple text files that store data in a structured way. They look like this:

```json
{
  "name": "Your Name",
  "description": "Your description here"
}
```

**Key Points:**
- Text values must be inside "double quotes"
- Always keep commas between items
- Don't add a comma after the last item in a list
- Be careful with special characters like quotes inside text

---

## Where are the Content Files?

All your content files are in the `content` folder at the root of your project:

```
ifti abdaal/
├── content/
│   ├── navigation.json    (Navigation bar & buttons)
│   ├── hero.json          (Homepage hero section)
│   ├── about.json         (About Me section)
│   ├── timeline.json      (Your journey timeline)
│   └── professional.json  (Professional section)
```

---

## How to Update Content

### Step 1: Open the JSON File
1. Navigate to the `content` folder
2. Open the file you want to edit with any text editor (Notepad, VS Code, etc.)

### Step 2: Make Your Changes
- Change text between the "quotes"
- Update image paths (e.g., `/ifti.jpg` to `/new-photo.jpg`)
- Modify numbers or counts

### Step 3: Save the File
- Save the file with the same name
- Make sure it still ends with `.json`

### Step 4: Refresh Your Website
- Restart your development server if running locally
- Or deploy the changes to see them live

---

## Important Rules

### ✅ DO:
- Keep the structure exactly as it is
- Use "double quotes" for text
- Save files with UTF-8 encoding
- Test your changes locally before deploying

### ❌ DON'T:
- Remove commas between items (except the last one)
- Change property names (the words before the colon)
- Add extra commas at the end of lists
- Use single quotes (use "double quotes" instead)

---

## Updating Each Section

### 1. Navigation (`content/navigation.json`)

This controls the navigation bar, menu links, and the "Get in Touch" button.

```json
{
  "logo": "MHI",                    // Your logo/initials
  "links": [                        // Navigation menu items
    {
      "name": "About",
      "href": "#about"
    },
    {
      "name": "Services",
      "href": "#services"
    }
    // ... more links
  ],
  "ctaButton": {                    // The expanding button
    "text": "Get in Touch",         // Button text when expanded
    "href": "#contact",             // Where button links to
    "icon": "mail"                  // Icon type (don't change)
  }
}
```

**Example: Changing Button Text**
```json
"text": "Contact Me Now",
```

**Example: Adding a New Menu Link**
```json
{
  "name": "Blog",
  "href": "#blog"
}
```

**Note:** The "Get in Touch" button starts expanded showing the text, then collapses to just an icon when you scroll down the page.

---

### 2. Hero Section (`content/hero.json`)

This controls the main homepage banner.

```json
{
  "profileImage": "/ifti.jpg",           // Path to your profile photo
  "name": "Mehidi Hasan Ifti",           // Your name
  "greeting": "Hey Friends",              // Greeting text
  "description": "I'm Ali. I'm a...",     // Main introduction text
  "bookTitle": "Feel-Good Productivity",  // Your book name
  "bookUrl": "#",                         // Link to your book
  "newsletter": {
    "title": "LifeNotes",                 // Newsletter name
    "subscriberCount": "330,000",         // Number of subscribers
    "reviewCount": "200+",                // Number of reviews
    "description": "Each week, I share...", // Newsletter description
    "privacyNote": "By submitting...",    // Privacy disclaimer
    "privacyPolicyUrl": "#"               // Link to privacy policy
  },
  "featuredIn": [                         // List of media features
    "BUSINESS INSIDER",
    "The New York Times",
    // Add more as needed
  ]
}
```

**Example: Changing Your Name**
```json
"name": "Your New Name",
```

**Example: Updating Subscriber Count**
```json
"subscriberCount": "350,000",
```

---

### 3. About Section (`content/about.json`)

This controls the "About Me" section on the About page.

```json
{
  "name": "Mehidi Hasan",               // Your name
  "introText": [                         // Array of paragraphs
    "First paragraph here...",
    "Second paragraph here..."
  ],
  "buttonText": "Read My Full Story",   // Button text
  "buttonUrl": "#",                      // Button link
  "images": [                            // Your photos
    {
      "url": "/ifti1.jpg",               // Image path
      "alt": "Description of photo",     // Image description
      "position": "top-right",           // Don't change
      "rotation": "rotate-3"             // Don't change
    },
    // ... more images
  ]
}
```

**Example: Adding a New Paragraph**
```json
"introText": [
  "First paragraph here...",
  "Second paragraph here...",
  "Third paragraph here..."
],
```

**Example: Changing a Photo**
```json
{
  "url": "/my-new-photo.jpg",
  "alt": "Me at a conference",
  "position": "top-right",
  "rotation": "rotate-3"
}
```

---

### 4. Timeline Section (`content/timeline.json`)

This controls your life/career timeline.

```json
{
  "timelineEvents": [
    {
      "year": "1994 - 2012",            // Time period
      "icon": "📚",                      // Emoji icon
      "iconBg": "bg-orange-100",         // Icon background color
      "content": [                       // Main content paragraphs
        "First paragraph...",
        "Second paragraph..."
      ],
      "image": "/timeline-photo.jpg",    // Optional photo
      "imageCaption": "Photo caption",   // Optional caption
      "extraContent": [                  // Optional extra paragraphs
        "Additional paragraph..."
      ]
    },
    // ... more events
  ]
}
```

**Example: Adding a New Timeline Event**
```json
{
  "year": "2025 - Present",
  "icon": "🚀",
  "iconBg": "bg-blue-100",
  "content": [
    "Started a new venture in 2025..."
  ]
}
```

**Timeline Icons Available:**
- 📚 (Education)
- 📝 (Writing)
- ▶️ (Video/YouTube)
- 👍 (Success)
- 👶 (Family)
- 🚀 (Business)
- 💼 (Career)

**Icon Background Colors:**
- `bg-orange-100` (Light orange)
- `bg-amber-100` (Light amber)
- `bg-yellow-100` (Light yellow)
- `bg-red-100` (Light red)
- `bg-blue-100` (Light blue)
- `bg-green-100` (Light green)

---

### 5. Professional Section (`content/professional.json`)

This controls the professional/newsletter section.

```json
{
  "mainImage": {
    "url": "/ifti.jpg",                  // Main photo
    "alt": "Ifti Abdaal",                // Photo description
    "objectPosition": "50% 20%"          // Photo positioning
  },
  "contactButton": {
    "text": "Contact Me",                 // Button text
    "url": "#contact"                    // Button link
  },
  "leftSection": {
    "title": "Actionable Productivity Tips", // Section title
    "description": "Each week, I share..."   // Section description
  },
  "newsletter": {
    "title": "LifeNotes",                // Newsletter name
    "subscriberCount": "330,000",        // Subscriber count
    "reviewCount": "200+",               // Review count
    "subscriberText": "Join a growing..." // Subscriber text
  }
}
```

---

## Updating Images

### Step 1: Add Your Image
1. Place your new image in the `public` folder
2. Name it something simple (e.g., `my-photo.jpg`)

### Step 2: Update the JSON
```json
"profileImage": "/my-photo.jpg"
```

**Note:** The `/` at the beginning is important!

### Supported Image Formats
- JPG/JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- WebP (`.webp`)
- GIF (`.gif`)

---

## Common Issues and Solutions

### Issue: Website shows error after updating
**Solution:** Check if you missed a comma or added an extra one at the end

### Issue: Changes don't appear
**Solution:**
1. Make sure you saved the file
2. Clear your browser cache (Ctrl + Shift + R)
3. Restart the development server

### Issue: Quotes inside text breaking
**Solution:** If you need quotes inside text, use `\"` instead
```json
"description": "He said \"Hello\" to me"
```

---

## Testing Your Changes

### Before Publishing:
1. ✅ Run the website locally (`npm run dev`)
2. ✅ Check all sections are displaying correctly
3. ✅ Verify all images load properly
4. ✅ Test all links and buttons
5. ✅ Check mobile responsive view

---

## Quick Reference: Special Characters

- `\"` - Use for quotes inside text
- `\\` - Use for backslash
- `\n` - New line (though avoid in JSON, use separate paragraphs)

---

## Getting Help

If you encounter issues:
1. Check the JSON syntax using an online JSON validator: https://jsonlint.com/
2. Compare your changes with the original file
3. Look for missing commas or extra commas at the end
4. Make sure all quotes match up

---

## Backup Reminder

**Always keep a backup of your JSON files before making major changes!**

Simply copy the `content` folder to a safe location before editing.

---

Happy updating! 🎉
