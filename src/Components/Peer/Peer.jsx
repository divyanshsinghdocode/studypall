// import React, { useEffect, useState, useRef } from "react";
// import Peer from "peerjs";

// function Peeer() {
//   const [peerId, setPeerId] = useState("");
//   const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
//   const remoteVideoRef = useRef(null);
//   const currentUserVideoRef = useRef(null);
//   const peerInstance = useRef(null);
//   const [mediaStream, setMediaStream] = useState(null);

//   useEffect(() => {
//     const peer = new Peer();

//     peer.on("open", (id) => {
//       setPeerId(id);
//     });

//     peer.on("call", (call) => {
//       call.answer(mediaStream);
//       call.on("stream", function(remoteStream) {
//         remoteVideoRef.current.srcObject = remoteStream;
//         remoteVideoRef.current.play();
//       });
//     });

//     peerInstance.current = peer;

//     // Cleanup function to release media stream on component unmount
//     return () => {
//       if (mediaStream) {
//         mediaStream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [mediaStream]);

//   const handleMediaStream = (stream) => {
//     currentUserVideoRef.current.srcObject = stream;
//     currentUserVideoRef.current.play();
//     setMediaStream(stream);
//   };

//   const handleError = (error) => {
//     console.error("getUserMedia error:", error);
//   };

//   const call = (remotePeerId) => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then(handleMediaStream)
//       .catch(handleError);
//   };

//   return (
//     <div className="D container px-5 py-24 mx-auto">
//       <div class="flex flex-col text-center w-full mb-12">
          
//         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
//           Connect With You{" "}
//           <a href="#Home" className="cursor-pointer">
//             StudyPal
//           </a>
//         </h1>
//         <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
//           Enter The Query Below Our Team Will Get Back To You Very Soon
//         </p>
//       </div>
//       <div className="flex flex-col text-center">
//         <h1>
//           Current user id is <br /> <span className="peerId">{peerId}</span>
//         </h1>

//         {/* <div class="mb-6">
//           <label
//             for="success"
//             class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
//           >
//           </label>
//           <input
//             type="text"
//             id="success"
//             class="bg-green-50 border w-3/12 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 dark:bg-gray-700 dark:border-green-500 flex justify-center"
            
//           />
//           <p class="mt-2 text-sm text-green-600 dark:text-green-500"></p>
//         </div> */}

//         {/* <input
//         type="text"
//         value={remotePeerIdValue}
//         onChange={(e) => setRemotePeerIdValue(e.target.value)}
//       /> */}
//         {/* <button
//           onClick={() => call(remotePeerIdValue)}
//           className="ml-4 inline-flex text-white bg-[#6366f1] text-black border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 hover:text-white rounded text-lg ease-in duration-300"
//         >
//           Call
//         </button> */}



// <div class="lg:w-1/2 md:w-2/3 mx-auto">
//             <div class="flex flex-wrap -m-2">
//               <div class="p-2 w-full">
//                 <div class="relative">
//                   <label for="message" class="leading-7 text-sm text-white">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                     placeholder="Enter User ID Of Friend Here"
//                     value={remotePeerIdValue}
//                     onChange={(e) => setRemotePeerIdValue(e.target.value)}></textarea>
//                 </div>
//               </div>
//               <div class="p-2 w-full">
//                 <button 
//                 onClick={() => call(remotePeerIdValue)}              
//                 class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                   Send Query
//                 </button>
//               </div>
//             </div>
//           </div>


          
//         <div>
//           <video ref={currentUserVideoRef} autoPlay muted playsInline />
//         </div>
//         <div>
//           <video ref={remoteVideoRef} autoPlay playsInline />
//         </div>
//       </div>














//     </div>
//   );
// }

// export default Peeer;

// import { useEffect, useRef, useState } from 'react';
// import Peer from 'peerjs';

// function Peeer() {
//   const [peerId, setPeerId] = useState('');
//   const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
//   const remoteVideoRef = useRef(null);
//   const currentUserVideoRef = useRef(null);
//   const peerInstance = useRef(null);

//   useEffect(() => {
//     const peer = new Peer();

//     peer.on('open', (id) => {
//       setPeerId(id)
//     });

//     peer.on('call', (call) => {
//       var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//       getUserMedia({ video: true, audio: true }, (mediaStream) => {
//         currentUserVideoRef.current.srcObject = mediaStream;
//         currentUserVideoRef.current.play();
//         call.answer(mediaStream)
//         call.on('stream', function(remoteStream) {
//           remoteVideoRef.current.srcObject = remoteStream
//           remoteVideoRef.current.play();
//         });
//       });
//     })

//     peerInstance.current = peer;
//   }, [])

//   const call = (remotePeerId) => {
//     var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//     getUserMedia({ video: true, audio: true }, (mediaStream) => {

//       currentUserVideoRef.current.srcObject = mediaStream;
//       currentUserVideoRef.current.play();

//       const call = peerInstance.current.call(remotePeerId, mediaStream)

//       call.on('stream', (remoteStream) => {
//         remoteVideoRef.current.srcObject = remoteStream
//         remoteVideoRef.current.play();
//       });
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Current user id is {peerId}</h1>
//       <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
//       <button onClick={() => call(remotePeerIdValue)}>Call</button>
//       <div>
//         <video ref={currentUserVideoRef} />
//       </div>
//       <div>
//         <video ref={remoteVideoRef} />
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';

function Peeer() {
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id);
    });

    peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((mediaStream) => {
          currentUserVideoRef.current.srcObject = mediaStream;
          currentUserVideoRef.current.play();
          call.answer(mediaStream);
          call.on('stream', (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream;
            remoteVideoRef.current.play();
          });
        })
        .catch((error) => {
          console.error('Error accessing media devices:', error);
        });
    });

    peerInstance.current = peer;

    return () => {
      peer.disconnect();
      peer.destroy();
    };
  }, []);

  const call = (remotePeerId) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        const call = peerInstance.current.call(remotePeerId, mediaStream);
        call.on('stream', (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  };

  return (
    <div className="App">
      <h1>Current user id is {peerId}</h1>
      <input type="text" value={remotePeerIdValue} onChange={(e) => setRemotePeerIdValue(e.target.value)} />
      <button onClick={() => call(remotePeerIdValue)}>Call</button>
      <div>
        <video ref={currentUserVideoRef} />
      </div>
      <div>
        <video ref={remoteVideoRef} />
      </div>
      Happy
    </div>
  );
}

export default Peeer;



// export default Peeer;