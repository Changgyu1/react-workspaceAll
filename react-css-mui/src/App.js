import logo from './logo.svg';



function Box({childrem}){
  const style={
    border: '2px solid black',
    padding : '16px',
  };
  return <div style={style}>{childrem}</div>
}
function App() {
  <Box>ㅎㅇ</Box>
}

export default App;
