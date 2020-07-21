import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const gestureDescription = new GestureDescription('wave');

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.NoCurl, 1.0);
  gestureDescription.addCurl(finger, FingerCurl.HalfCurl, 0.5);
}

export default gestureDescription;
