import React, {  Suspense, useState, useEffect, useRef } from "react";
import { WasmDecoder } from "@impactdk/barcode-scanner";
import { ReactBarcodeScanner  } from "@impactdk/react-barcode-scanner";
import "./cameraHandler.css";

const CameraHandler = () => {
	const [isCameraSupported, setCameraSupported] = useState(false);
	const { current: decoder  } = useRef(WasmDecoder.getInstance("/cpoc1/path2assets"));

	useEffect(() => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			setCameraSupported(true);
		}
		console.log("did mounted");
	}, []);

	function handleBarcode(barcode: string): void {
		alert(JSON.stringify(barcode));
	}
	return (
		<>
			{isCameraSupported ? (
				<Suspense fallback={<div>Loading...</div>}>
					<ReactBarcodeScanner decoder={decoder} onFindBarcode={handleBarcode}  />
				</Suspense>
			) : (
				""
			)}
			{!isCameraSupported ? (
				<div className="cameraHandler__unsopported">
					<div>
						<p>
							Your device does not support/enabled camera access or something
							went wrong{" "}
							<span role="img" aria-label="thinking-face">
                🤔
              </span>
						</p>
						<p>You can enter the barcode below</p>
					</div>
				</div>
			) : (
				""
			)}
			<canvas id="Mycanvas"></canvas>
		</>
	);
};

export default CameraHandler;
