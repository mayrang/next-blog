import React from "react";

type Props = {
  categoryList: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Category({ categoryList, selected, onClick }: Props) {
  return (
    <div className="hidden md:block text-center p-4">
      <h4 className="font-bold font-lg leading-5  border-b-sky-500 border-b mb-4">Category</h4>
      <ul>
        {categoryList.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${selected === category && "text-sky-600"}`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
