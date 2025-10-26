// components/ProjectFilters.tsx
"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Define the filter categories
const categories = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "E-commerce",
  "UI/UX Design",
];

// Define the props type, including the function to handle filter changes
type ProjectFiltersProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
};

export const ProjectFilters = ({ selectedFilter, onFilterChange }: ProjectFiltersProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center gap-4 flex-wrap">
      <span className="text-sm font-medium text-muted-foreground mr-2">Filter:</span>
      <ToggleGroup
        type="single"
        value={selectedFilter}
        onValueChange={(value) => {
          if (value) onFilterChange(value); // Call the function passed via props
        }}
        className="flex flex-wrap justify-center"
      >
        {categories.map((category) => (
          <ToggleGroupItem
            key={category}
            value={category}
            aria-label={`Toggle ${category}`}
            className="rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};