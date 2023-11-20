import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';


function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  return (
    <div className={`light-switch ${themeName}`}>
      <div
        className='on'
        onClick = {(e) => setThemeName(prev => 'day')}
        >DAY</div>
      <div
        className='off'
        onClick = {(e) => setThemeName(prev => 'night')}
        >NIGHT</div>
    </div>
  );
}

export default LightSwitch;
