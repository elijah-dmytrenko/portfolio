# Adding New Projects

This directory contains individual JSON files for each project. To add a new project:

## 1. Create a new JSON file

Create a new file named `your-project-slug.json` in this directory. Use the `sample-project.json` as a template.

## 2. Required fields

Each project JSON file must contain the following fields:

```json
{
  "slug": "your-project-slug",
  "title": "Your Project Title",
  "date": "Month Year",
  "description": "Brief description of the project",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "overview": "Detailed project overview with line breaks using \\n",
  "technicalDetails": {
    "frontend": [
      { "name": "Technology Name", "description": "Description of the technology" }
    ],
    "features": [
      { "name": "Feature Name", "description": "Description of the feature" }
    ]
  },
  "developmentProcess": [
    { "title": "Phase Title", "description": "Description of the development phase" }
  ],
  "challenges": [
    { 
      "title": "Challenge Title", 
      "description": "Description of the challenge",
      "solution": "How the challenge was solved"
    }
  ],
  "futureEnhancements": {
    "planned": ["Feature 1", "Feature 2"],
    "technical": ["Improvement 1", "Improvement 2"]
  },
  "icon": "SVG path data for the project icon",
  "iconColor": "indigo|green|blue|purple|orange|red"
}
```

## 3. Icon and Color

- **icon**: Use SVG path data (you can find icons at [Heroicons](https://heroicons.com/))
- **iconColor**: Choose from: `indigo`, `green`, `blue`, `purple`, `orange`, `red`

## 4. File naming convention

- Use kebab-case for the filename (e.g., `my-awesome-project.json`)
- The `slug` field should match the filename (without .json extension)

## 5. Example

See `portfolio-website.json` for a complete example of a real project.

## 6. Automatic updates

Once you add a new JSON file, it will automatically appear on the Projects page and be accessible via `/projects/your-project-slug`. 