import { useRef, useState } from "react";

export default function ImageUpload({ onChangeImages }) {
    const [previewUrl, setPreviewUrl] = useState();
    const imgRef = useRef();

    function handleOnChange(e) {
        const files = Array.from(e.target.files);
        const previewUrl = files.map((file) => URL.createObjectURL(file));
        setPreviewUrl(previewUrl);
        onChangeImages(files);
    }

    return (
        <>
            <div>
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    ref={imgRef}
                    multiple
                    onChange={handleOnChange}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {previewUrl &&
                    previewUrl.length > 0 &&
                    previewUrl.map((url, index) => (
                        <img
                            src={url}
                            key={index}
                            alt="Preview img"
                            className="w-40 h-40 object-cover rounded-lg shadow-md transition-transform hover:scale-105"
                        />
                    ))}
            </div>
        </>
    );
}
