# ⭐Munhak.Zip_Front

더 자세한 깃허브 룰 설명은 팀 노션 참고. 

# TEST ID/PW

email :  <br>
pw : 

## 작업 순서 

1. 이슈 생성
2. 브랜치 생성 후 작업. add, commit, push (절대 메인에 push xx)
3. PR 날리기, pr 담당자에게 알리기
4. 메인에 merge는 본인이 하면 xx 반드시 다른 사람이 코드 확인 후 merge
5. 이슈 close

## type
- add : 새로운 파일 추가
- feat : 만들어진 파일에 새로운 기능 추가, 수정기존의 기능을 요구 사항에 맞추어 수정
- fix : 기능에 대한 버그 수정
- build : 빌드 관련 수정
- chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
- ci : CI 관련 설정 수정
- docs : 문서 수정
- comment : 주석 추가
- style : 코드 스타일, 포맷팅에 대한 수정
- refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
- test : 테스트 코드 추가/수정
- release : 버전 릴리즈
- remove : 코드 또는 파일, 리소스 제거

## Commit message 
commit은 틈틈히 쪼개서 하는게 좋음. 예를 들어서 새 파일 추가 → commit → 새 파일에 대한 작업 진행

`[type] : 내용 #이슈번호`

ex) `[add] : 이미지 파일 추가 #223`

## branch 이름
branch명은 한글로 작성 시 깨질 수 있음. 영문으로 작성할 것.

`type/작업내용`

ex)  `fix/login error`

## PR 규칙 
pr시 자신이 작업한 내용 자세하게 써주어야 함!!

예진 ← 민영 ← 다윤 ← 미현 ex( 민영이가 예진이 PR merge, 예진이가 미현 PR merge

merge 할 때 delete branch 해주세용
