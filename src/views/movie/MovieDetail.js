import React, { useState, useEffect } from 'react';
import '../../resources/css/Movie/MovieDetail.css';
import bookmark from '../../resources/img/Movie/bookmark.png';
import star from '../../resources/img/Movie/star.png';
import starN from '../../resources/img/Movie/star_unclick.png';
import back from '../../resources/img/Movie/back.png';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
    const navigate = useNavigate();
    const { mvId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [starRating, setStarRating] = useState(0); // 초기 별점을 0으로 설정
    const [isGoodClicked, setIsGoodClicked] = useState(true);
    const [isBadClicked, setIsBadClicked] = useState(false);
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        axios.get(`/movie/${mvId}`)
            .then(response => {
                const movieData = response.data;
                movieData.openDate = movieData.openDate.split(' ')[0]; // openDate에서 시간 부분을 제거
                setMovieDetails(movieData);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    }, [mvId]);
    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    const handleGoodClick = () => {
        setIsGoodClicked(true);
        setIsBadClicked(false);
    };

    const handleBadClick = () => {
        setIsGoodClicked(false);
        setIsBadClicked(true);
    };

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const handleReviewSubmit = () => {
        axios.post('/reviews/add', {
            rvStar: starRating,  // 선택한 별점
            mvTitle: movieDetails.mvTitle,  // 영화 제목
            content: reviewText,  // 리뷰 내용
            is_Critic: "N",  // 평론가 여부는 무조건 false
            mvId: mvId  // 영화 ID
            // 필요한 경우 추가 필드를 포함할 수 있습니다.
        })
            .then(response => {
                alert("리뷰가 성공적으로 제출되었습니다.");
                console.log('리뷰가 성공적으로 제출되었습니다.');
                // 성공적으로 제출되었을 때 UI를 업데이트하거나 확인 메시지를 표시할 수 있습니다.
            })
            .catch(error => {
                alert("리뷰 제출 중 오류 발생했습니다.");
                console.error('리뷰 제출 중 오류 발생:', error);
                // 오류 발생 시 오류 메시지를 표시하거나 graceful하게 오류를 처리할 수 있습니다.
            });
    };

    const showReserve = () => {
        navigate(`/movie/showReserveForm/${mvId}`, { state: movieDetails });
    };

    const Critic = ({ name, stars, reviewTitle, reviewContent }) => {
        const renderStars = (count, totalStars) => {
            const starImages = [];
            for (let i = 0; i < totalStars; i++) {
                starImages.push(
                    <img
                        key={i}
                        className="star_image"
                        src={i < count ? star : starN}
                        width={25}
                        height={25}
                    />
                );
            }
            return starImages;
        };

        return (
            <div className="critic">
                <div className="critic_name">
                    {name}
                    <div className="star_critic">
                        {renderStars(stars, 5)}
                    </div>
                    <div className="bookmark_critic">
                        <img src={bookmark} width={35} height={35} />
                    </div>
                </div>
                <div className="critic_review_mid">
                    {reviewTitle}
                </div>
                <div className="critic_review">
                    {reviewContent}
                </div>
                <div className="horizontal-line"></div>
            </div>
        );
    };

    const critics = [
        {
            name: '이은선',
            stars: 3,
            reviewTitle: '리뷰 소제목',
            reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
        },
        {
            name: '이은선',
            stars: 3,
            reviewTitle: '리뷰 소제목',
            reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
        },
    ];

    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30} alt="Back"/>
            </div>
            <div className="bookmarkMovie">
                <img src={bookmark} width={45} height={45} alt="Bookmark"/>
            </div>
            <div className="imgMovie">
                <img src={movieDetails.mvImg} width={250} height={350} alt={movieDetails.mvTitle}/>
            </div>
            <div className="title">
                {movieDetails.mvTitle}
            </div>
            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < movieDetails.mvStar ? star : starN} // movieDetails.mvStar를 사용하여 별점을 렌더링
                        width={30}
                        height={30}
                    />
                ))}
                <div className="star_text">
                    ({movieDetails.mvStar})
                </div>
            </div>
            <div className="movie_text">
                {movieDetails.mvDetail}
            </div>
            <div className="category">
                <div className="category_box">
                    <div className="category_text">
                        #{movieDetails.genre2}
                    </div>
                </div>
                <div className="category_box">
                    <div className="category_text">
                        #{movieDetails.openDate}
                    </div>
                </div>
            </div>
            <button className="reservation_btn" onClick={showReserve}>예매하기</button>

            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < starRating ? star : starN} // 현재 별점 상태에 따라 이미지 소스를 선택
                        width={40}
                        height={40}
                        onClick={() => handleStarClick(index)} // 별 클릭 시 이벤트 핸들러 호출
                    />
                ))}
            </div>
            <input className="review_text" type="text" placeholder="리뷰를 작성해주세요" value={reviewText} onChange={handleReviewChange}/>
            <button className="review_btn" onClick={handleReviewSubmit}>작성</button>
            <div className="expect">
            평점요약
            </div>
            <button className={isGoodClicked ? "btn_good" : "btn_good_not"} onClick={handleGoodClick}>높은 평점</button>
            <button className={isBadClicked ? "btn_bad" : "btn_bad_not"} onClick={handleBadClick}>낮은 평점</button>
            <div className="expect_box">
                <b className="expect_text">ㅇㅇ님은 이거 이거 좋아해서 영화명은 3점일것입니다~</b>
            </div>
            <div className="critic_title">
                평론가 리뷰
            </div>
            {critics.map((critic, index) => (
                <Critic
                    key={index}
                    name={critic.name}
                    stars={critic.stars}
                    reviewTitle={critic.reviewTitle}
                    reviewContent={critic.reviewContent}
                />
            ))}
        </div>
    );
}

export default MovieDetail;
