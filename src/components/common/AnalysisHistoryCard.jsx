import React from "react";
import { Link } from "react-router-dom";

const AnalysisHistoryCard = ({ id, title, desc, date, image }) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-gray-100 shadow-md p-3 py-5 gap-3">
      <img
        src="/public/assets/icons/plant.svg"
        alt={title}
        className="w-6 h-6 object-cover"
      />
      <div className="flex-1 text-right">
        <h3 className="font-bold text-base mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{desc}</p>
        <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-2">
          <span>{date}</span>
          <Link
            to={`/profile/analysis-history/analysis-detail/${id}`}
            state={{ title, desc, date }}
          >
            <button className="cursor-pointer mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-xl text-xs hover:bg-green-200 transition-colors">
              مشاهده جزئیات
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalysisHistoryCard;
