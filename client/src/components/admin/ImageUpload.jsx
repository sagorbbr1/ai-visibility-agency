import { useRef } from "react";
import { ImagePlus } from "lucide-react";

const ImageUpload = ({ image, setImage }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
  };

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-5 text-lg font-semibold">
        Cover Image
      </h2>

      <div
        onClick={() => inputRef.current.click()}
        className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-cyan-500 hover:bg-cyan-50"
      >

        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <>
            <ImagePlus className="mb-4 h-12 w-12 text-slate-400" />

            <p className="font-medium text-slate-600">
              Click to upload cover image
            </p>

            <span className="mt-2 text-sm text-slate-400">
              JPG, PNG, WEBP
            </span>
          </>
        )}

      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

    </div>
  );
};

export default ImageUpload;