# Quick Guide: Using MDX in This Project

This is a quick reference guide for content creators and developers working with MDX in this project.

## 🚀 Quick Start

### Create a New Activity

1. Create file: `content/activities/your-activity-name.mdx`
2. Add frontmatter and content:

```mdx
---
title: "Your Activity Title"
date: "2024-11-30"
description: "Brief description"
author: "Your Name"
tags: ["Team", "Workshop"]
published: true
---

## Your Content

Write your content here using Markdown.
```

3. Access at: `http://localhost:3000/our-activities/your-activity-name`

### Create a New Service

1. Create file: `content/services/your-service-name.mdx`
2. Add frontmatter and content (same format as above)
3. Access at: `http://localhost:3000/our-services/your-service-name`

## 📋 Frontmatter Template

Copy and paste this template:

```yaml
---
title: "Your Title Here"
date: "2024-11-30"
description: "SEO-friendly description (150-160 characters)"
author: "Author Name"
tags: ["Tag1", "Tag2", "Tag3"]
featuredImage: "https://example.com/image.jpg"
published: true
---
```

**Required Fields:**
- `title`, `date`, `description`, `published`

**Optional Fields:**
- `author`, `tags`, `featuredImage`

## ✍️ Writing Content

### Basic Markdown

```mdx
## Heading 2
### Heading 3

**Bold text** and *italic text*

[Link text](https://example.com)

- List item 1
- List item 2

1. Numbered item 1
2. Numbered item 2

> This is a blockquote
```

### Code Blocks

````mdx
```javascript
const hello = "world";
console.log(hello);
```
````

### Tables

```mdx
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## 🖼️ Adding Images

### Single Image (Centered)

```mdx
![Alt text](https://example.com/image.jpg "Image caption")
```

**Result:** Centered at 80% width with caption below

### Two Images (Grid)

```mdx
![Image 1](url1 "Caption 1")
![Image 2](url2 "Caption 2")
```

**Result:** 2-column grid layout

### Three Images (Grid)

```mdx
![Image 1](url1 "Caption 1")
![Image 2](url2 "Caption 2")
![Image 3](url3 "Caption 3")
```

**Result:** 3-column grid layout

### Four Images (Grid)

```mdx
![Image 1](url1 "Caption 1")
![Image 2](url2 "Caption 2")
![Image 3](url3 "Caption 3")
![Image 4](url4 "Caption 4")
```

**Result:** 4-column grid layout

**⚠️ Important:** 
- Images must be on consecutive lines (no blank lines between them)
- Add captions using the title attribute: `"Caption text"`
- Use external URLs or place images in `public/images/`

## 🎨 Styling Tips

### Emphasis

```mdx
**Bold text** for strong emphasis
*Italic text* for subtle emphasis
***Bold and italic*** for maximum emphasis
```

### Horizontal Rule

```mdx
Content above

---

Content below
```

### Inline Code

```mdx
Use `inline code` for technical terms or commands.
```

## ✅ Testing Your Content

### Local Development

```bash
# Start dev server
pnpm run dev

# Visit your page
# http://localhost:3000/our-activities/your-activity-name
# or
# http://localhost:3000/our-services/your-service-name
```

### Build Test

```bash
# Build the project
pnpm run build

# Check output for your page
# Should see ● (SSG) indicator next to your route
```

## 🔧 Common Issues & Solutions

### Issue: Page not found (404)

**Solutions:**
1. Check filename is in kebab-case: `my-page.mdx` ✅ not `My Page.mdx` ❌
2. Ensure file is in correct directory: `content/activities/` or `content/services/`
3. Verify `published: true` in frontmatter
4. Rebuild the project: `pnpm run build`

### Issue: Images not showing

**Solutions:**
1. Check image URL is correct and accessible
2. For external images, ensure URL starts with `http://` or `https://`
3. For local images, place in `public/images/` and use `/images/filename.jpg`

### Issue: Image grid not working

**Solutions:**
1. Ensure images are on consecutive lines (no blank lines between)
2. Each image should be on its own line
3. Images must be the only content in that paragraph

### Issue: Frontmatter not parsing

**Solutions:**
1. Check YAML syntax (proper spacing, quotes)
2. Ensure `---` delimiters are on separate lines
3. Use `"quotes"` for values with special characters
4. Date format must be: `"YYYY-MM-DD"`

## 📝 Best Practices

### File Naming
✅ **Good:** `team-building-2024.mdx`  
❌ **Bad:** `Team Building 2024.mdx`, `team_building_2024.mdx`

### Date Format
✅ **Good:** `"2024-11-30"`  
❌ **Bad:** `"11/30/2024"`, `"30-11-2024"`

### Tags
✅ **Good:** `["Team Building", "Innovation", "Culture"]`  
❌ **Bad:** `"Team Building, Innovation, Culture"`

### Descriptions
- Keep under 160 characters for SEO
- Make it descriptive and engaging
- Include relevant keywords

### Images
- Use descriptive alt text for accessibility
- Always add captions for context
- Use high-quality, optimized images
- Consider file size (< 500KB recommended)

## 🎯 Content Checklist

Before publishing, verify:

- [ ] Frontmatter is complete and valid
- [ ] `published: true` is set
- [ ] Date is in correct format (YYYY-MM-DD)
- [ ] Description is under 160 characters
- [ ] Images have alt text and captions
- [ ] All links are working
- [ ] Content is proofread
- [ ] Tested locally (`pnpm run dev`)
- [ ] Build passes (`pnpm run build`)

## 💡 Pro Tips

1. **Preview Before Publishing:** Set `published: false` while drafting
2. **Use Meaningful Tags:** Help users find related content
3. **Add Dates to Titles:** Makes content timeline clear
4. **Optimize Images First:** Compress before using
5. **Check Mobile View:** Test responsiveness
6. **Use Headings Hierarchy:** H2 → H3 → H4 (don't skip levels)

## 📚 Need More Help?

Check these resources:
- `MDX_IMPLEMENTATION_SUMMARY.md` - Complete overview
- `prompts/MDX_QUICK_START.md` - Detailed quick start
- `content/activities/example-activity.mdx` - Example with all features
- `content/services/example-service.mdx` - Comprehensive example

## 🔗 Useful Links

- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

**Last Updated:** November 30, 2024  
**Questions?** Check the full documentation or reach out to the development team.
