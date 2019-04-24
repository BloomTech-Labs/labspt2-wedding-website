// from settings page
const SettingsPage = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
max-width: 1280px;
min-width: 1000px;
justify-content: space-around;
height: 100vh;
max-height: 500px;
margin-top: 100px;

@media screen and (max-width: 1024px) {
  flex-direction: column;
  width: 500px;
  margin: 0 200px 0 -200px;
}
`;

const SettingsBox = styled.div`
display: flex;
flex-direction: column;
width: 350px;

@media screen and (max-width: 1024px) {
  width: 100%;
  justify-content: center;
  max-width: 350px;
  margin: 0;

}
`;

const Box = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0 5px 0;
`;

const RightBox = styled.div`
display: flex;
width: 100%;
margin: 20px 0 5px 0;
`;

const SpecialBox = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`;

const InputBox = styled.input`
border-bottom: 1px solid #000000;
width: 90%;
`;

const buttonDiv = {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
marginLeft: 'auto',
marginRight: 'auto',
marginBottom: '25px',
marginTop: '25px',
height: '50px',
boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
width: '26%'
}