import React, {useState} from "react";
import image1 from '../img/다운로드.jpg';
import image2 from '../img/안들린다.jpg';
import image3 from '../img/해달파티.png';


function ImageChange(){
    // 초기 이미지 경로는 ../img/다운로드.jpg로 설정되어있는
    // image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(2);

    // 이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭 함수 만들기
    const handleClick = () => {
        if(isClick === 2) {
            setImageSrc(image2);
            setIsClick(4);
        } else if(isClick === 4){
            setImageSrc(image1);
            setIsClick(1);
        } else {
            setImageSrc(image3);
            setIsClick(2);
        }
    
    }
    return(
        <div>
            
            <img src={imageSrc} onClick={handleClick} />
        </div>
    )
}
export default ImageChange;