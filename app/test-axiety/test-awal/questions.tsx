import React from 'react';

type Option = {
  id: string;
  label: string;
};

type QuestionProps = {
  question: string;
  options: Option[];
  name: string;
};

const Question = ({ question, options, name }: QuestionProps) => {
  return (
    <div className="row mt-5">
      <h3 className="mb-4 font-semibold text-gray-900">{question}</h3>
      <ul className="items-center w-full text-sm font-medium bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600 dark:text-white">
        {options.map((option) => (
          <li key={option.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id={option.id} type="radio" value={option.label} name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-transparent dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
              <label htmlFor={option.id} className="w-full py-3 ms-2 text-sm font-medium text-gray-900">{option.label}</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
