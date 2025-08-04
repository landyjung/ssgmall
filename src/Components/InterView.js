const interviews=[
  {
    id:'interview-1',
    image:`${process.env.PUBLIC_URL}/images/interview03.png`,
    title:'인천의 심장, 최 정!',
    subtitle:'KBO 최초 500홈런 기록 갱신 중',
    description:'최정 걱정은 사치! 인천의 심장이 홈런을 치면 랜더스는 이긴다.'
  },
  {
    id:'interview-2',
    image:`${process.env.PUBLIC_URL}/images/interview01.png`,
    title:'든든한 문단속 조병현!',
    subtitle:'New Closer of SSG LANDERS',
    description:'인천의 뒷문을 든든히 지키는 마운드의 수문장 조병현이 있어 9회말이 든든하다.'
  },
  {
    id:'interview-3',
    image:`${process.env.PUBLIC_URL}/images/interview02.png`,
    title:'류현진과 맞대결에서 승리한 김광현',
    subtitle:'29번 인천의 영결, 김광현',
    description:'승자의 여유 보다는 상대를 배려하는 자세로 ‘에이스의 품격’을 보여줬다. '
  }
]

function InterView(){
  return(
    <section className='interview_wrap'>
      <h2>INTERVIEW</h2>
      <p>랜더스의 마운드와 심장을 지키는 인천의 자랑</p>
      <div className='content_wrap'>
        {
            interviews.map((interview,index)=>(
                <div key={interview.id} className={`interview${index+1}`}>
                    <img src={interview.image} alt={interview.title} />
                    <h3>
                        <span>{interview.title}</span>{interview.subtitle}
                    </h3>
                    <p>{interview.description}</p>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default InterView;