import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all gap-3 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 hover:font-bold disabled:scale-100 disabled:bg-opacity-65 dark:bg-slate-100 dark:text-slate-950"
      disabled={pending}

    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-border-2 border-white z-1"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
