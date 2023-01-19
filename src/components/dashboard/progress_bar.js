import React from 'react'

function Progress_bar(props) {
	
	const Parentdiv = {
		height: 10,
		width: '80%',
		backgroundColor: '#f1f1f1',
		borderRadius: 40,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${props.progress}%`,
		backgroundColor: "#00ade9",
	  borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		color: '#00C98B',
		fontWeight: 900,
    fontSize: "1.1rem"
	}
	
  
  const option = props.option
  if (option == 1) {
    return (
      <div className='flex justify-between'>
        <div style={Parentdiv}>
          <div style={Childdiv}></div>
        </div>
        <span style={progresstext}>{`${props.progress}%`}</span>
      </div>
    )
  }
  if (option == 2) {
    return (
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
        <span style={progresstext}>{`${props.progress}%`}</span>
      </div>
    )
  }
	
}

export default Progress_bar;
