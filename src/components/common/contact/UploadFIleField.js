import clsx from "clsx";
import Image from "next/image";
import React from "react";

const UploadFileField = ({
  file,
  id,
  setFile,
  touched,
  error,
  dragActive,
  setDragActive,
  secondVarient,
  handleDrag,
  handleDrop
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={clsx(
          "opacity_Hover cursor-pointer flex flex-col border-dashed text-center justify-center items-center lg:gap-y-[0.52083333333vw] gap-y-[10px]  border border20 w-full lg:py-[2.52604166667vw] lg:px-[1.04166666667vw] sm:p-[30px] p-[20px]",
          dragActive
            ? "border-white border-2 !text-white"
            : file
            ? "border-white"
            : "border-[#94D4FF] "
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleDrop(e.dataTransfer.files[0]);
        }}
      >
        <input
          type="file"
          id={id}
          name={id}
          className="hidden"
          onChange={({ target }) => setFile(target.files[0])}
        />

        <div className="relative lg:w-[3.71723958333vw] lg:h-[2.8321875vw] sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]">
          <Image fill alt="upload" src="/images/icons/upload.svg" />
        </div>
        {file ? (
          <span className="text-white">{file.name}</span>
        ) : (
          <>
            <span className="text-[#94D4FF]">
              Choose or Drop your {id?.toUpperCase()} here.
            </span>
            <span className="text-[#94D4FF]">
              PDF, JPG, JPEG, PNG (max 2 mbs)
            </span>
          </>
        )}
      </label>
      {touched && error && (
        <p
          className={clsx(
            "mtext16 lg:text20 -mt-6  lg:px-[1.5625vw] sm:px-[20px] px-[10px]",
            secondVarient ? "text-red-400" : "text-red-600"
          )}
        >
          {error}
        </p>
      )}
    </>
  );
};

export default UploadFileField;
