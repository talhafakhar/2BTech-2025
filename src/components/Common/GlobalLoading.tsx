import React from "react";
import Lottie from "lottie-react";

interface GlobalLoadingProps {
    isVisible: boolean;
    onAnimationEnd: () => void;
    animationData: object;
}

const GlobalLoading: React.FC<GlobalLoadingProps> = ({
                                                         isVisible,
                                                         onAnimationEnd,
                                                         animationData,
                                                     }) => {
    return (
        <div
            className={`
        fixed inset-0 z-50 flex items-center justify-center bg-white
        transition-transform duration-700
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
            onTransitionEnd={() => {
                if (!isVisible) onAnimationEnd();
            }}
        >
            <div className="w-56 h-56">
                <Lottie animationData={animationData} loop={true} />
            </div>
        </div>
    );
};

export default GlobalLoading;
