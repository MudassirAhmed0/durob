import React from "react";
import Numbers from "./Numbers";

const Pagination = ({
  currentPage,
  lastPage,
  setCurrentPageNumber,
  arabic
}) => {
  const hanldePageChange = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
  };
  const handlePrev = () => {
    setCurrentPageNumber((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPageNumber((prev) => prev + 1);
  };

  const pageNumbers = [];
  const numPageButtonsToShow = 3; // Number of page buttons to show

  for (
    let i = Math.max(currentPage - numPageButtonsToShow, 1);
    i <= Math.min(currentPage + numPageButtonsToShow, lastPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination w-full lg:mt-[4.16666666667vw] mt56 flex items-center justify-center lg:gap-x-[1.66666666667vw] sm:gap-x-[30px] gap-x-[20px]">
      <svg
        onClick={handlePrev}
        className={`  active    cursor-pointer transform  ${
          arabic ? "" : "rotate-[-180deg]"
        }  lg:w-[2.5vw] lg:h-[2.5vw] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] ${
          currentPage == 1 ? "pointer-events-none opacity-[0.5]" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        opacity="1"
      >
        <g>
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#002B87"
          />
          <path
            d="M21.4816 32.4403L21.4817 32.4403L28.8323 24.9709C29.1891 24.6091 29.189 24.0071 28.8333 23.6446L28.8332 23.6445L21.4825 16.1751L21.4824 16.1751C21.1207 15.8083 20.5332 15.8083 20.1715 16.1751L20.1714 16.1751C19.8107 16.5419 19.8105 17.1356 20.1715 17.5016L26.8693 24.3081L20.1707 31.1146L21.4816 32.4403ZM21.4816 32.4403C21.1198 32.8071 20.5333 32.807 20.1708 32.4404L20.1707 32.4403M21.4816 32.4403H20.1707M20.1707 32.4403C19.8098 32.0744 19.8098 31.4807 20.1706 31.1147L20.1707 32.4403Z"
            fill="#002B87"
            stroke="#002B87"
            strokeWidth="0.2"
          />
        </g>
      </svg>

      {currentPage > numPageButtonsToShow && (
        <div
          onClick={() => hanldePageChange(1)}
          className="cursor-pointer flex items-center lg:gap-x-[0.20833333333vw] gap-x-[4px]"
        >
          <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
          <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
          <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
        </div>
      )}
      {pageNumbers?.map((value, i) => (
        <div
          onClick={() => hanldePageChange(value)}
          key={i}
          className={`${
            value === currentPage ? "active" : ""
          } numbers cursor-pointer text29 lg:text-[1.45833333333vw] text-[#002B87] text-opacity-[0.3]`}
        >
          {value}
        </div>
      ))}
      {currentPage < lastPage - numPageButtonsToShow && (
        <div
          onClick={() => hanldePageChange(lastPage)}
          className="cursor-pointer flex items-center lg:gap-x-[0.20833333333vw] gap-x-[4px]"
        >
          <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
          <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
          <span className="lg:w-[0.15625vw] lg:h-[0.15625vw] w-[3px] h-[3px] border100 bg-[#B8C0BF]"></span>
        </div>
      )}
      <svg
        onClick={handleNext}
        className={`active cursor-pointer   transform ${
          arabic ? "" : "rotate-[-180deg]"
        } lg:w-[2.5vw] lg:h-[2.5vw] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] ${
          currentPage === lastPage ? "pointer-events-none opacity-[0.5]" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        opacity="1"
      >
        <rect
          x="0.5"
          y="0.5"
          width={47}
          height={47}
          rx="23.5"
          fill="white"
          stroke="#002B87"
        />
        <path
          d="M27.5197 31.8353L27.5198 31.8354C27.8812 32.1883 28.4657 32.1881 28.8279 31.8354L28.828 31.8354C29.1907 31.4812 29.1907 30.9051 28.828 30.5509L22.1334 24.0004L28.8271 17.4499C29.1899 17.0957 29.1898 16.5196 28.8272 16.1647L28.8271 16.1646C28.4657 15.8118 27.8803 15.8118 27.5189 16.1646L27.5189 16.1647L20.1682 23.3574L20.168 23.3575C19.8105 23.7084 19.8104 24.2924 20.169 24.6426L27.5197 31.8353Z"
          fill="#002B87"
          stroke="#002B87"
          strokeWidth="0.2"
        />
      </svg>
    </div>
  );
};

export default Pagination;
