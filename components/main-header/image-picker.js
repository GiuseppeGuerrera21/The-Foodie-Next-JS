"use client";

import classes from "@/components/main-header/image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function pickImageHandler() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="Picked image by the user"
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    id={name}
                    name={name}
                    type="file"
                    accept="image/png, image/jpeg"
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                ></input>
                <button
                    className={classes.button}
                    type="button"
                    onClick={pickImageHandler}
                >
                    Pick Image
                </button>
            </div>
        </div>
    );
}