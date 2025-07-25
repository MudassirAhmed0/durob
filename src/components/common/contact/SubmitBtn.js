import React from "react";

const SubmitBtn = ({ arabic, disabled, isLoading }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`mt-4 lg:px-[1.5625vw] sm:px-[20px] px-[10px]   flex items-center lg:gap-x-[0.52083333333vw] gap-x-[6px] group submit_Btn `}
    >
      <span className="lg:text30 mtext20 f600 capitalize">
        {isLoading
          ? arabic
            ? "تقديم..."
            : "Submitting..."
          : arabic
          ? "ارسل"
          : "Send"}
      </span>
      {isLoading || (
        <div
          className={`${
            arabic
              ? "group-hover:lg:translate-x-[-0.52083333333vw] group-hover:translate-x-[-6px] scale-x-[-1]"
              : "group-hover:lg:translate-x-[0.52083333333vw] group-hover:translate-x-[6px] scale-x-[1]"
          } relative lg:size-[1.82291666667vw] size-[20px] transition500`}
        >
          <svg
            className="w-full h-full chevron"
            width={35}
            height={36}
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y={1} width={34} height={34} rx={17} stroke="" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.082 17.4472L22.8996 18.713L16.0858 25.5417C15.4736 26.1358 14.5723 26.477 13.6232 26.4706L12.0001 26.4706L13.6823 24.8944L20.8627 17.7469C20.9807 17.6353 21.1135 17.5365 21.257 17.4472C21.1135 17.359 20.9807 17.2612 20.8606 17.1507L13.6536 10.0903L12.0001 8.50033L13.586 8.50033C14.5362 8.49076 15.4407 8.8298 16.056 9.41967L22.8964 16.2218L24.082 17.4472Z"
              fill=""
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default SubmitBtn;
