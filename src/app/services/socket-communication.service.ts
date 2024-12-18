import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import  io, { Socket } from 'socket.io-client';
import { fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketCommunicationService implements OnInit {
  private socket: Socket;

  // private socket: Socket;
  // private socket = io('http://localhost:3000', { transports: ['websocket'] });
  public peerConnection: RTCPeerConnection;
  private localStream: MediaStream;

  private usersSubject = new BehaviorSubject<string[]>([]);
  users$ = this.usersSubject.asObservable();

  private joinedSubject = new BehaviorSubject<string>('');
  joined$ = this.joinedSubject.asObservable();

  private remoteStream: MediaStream;

  constructor() {

    // this is working for multiple camera live streaming
    
    // this.socket = io('http://localhost:3000', { transports: ['websocket'] });

    this.socket = io('http://localhost:3000/assets/live-session/start-live-session', { transports: ['websocket'] });


    // this.peerConnection = new RTCPeerConnection();
    // this.setupSocketListeners();
    // this.setupMediaStream();

    // this is working code below for single streaming

    // this.socket.on('update-users', (users: string[]) => {
    //   this.usersSubject.next(users);
    // });

    // this.socket.on('user-joined', (userId: string) => {
    //   this.joinedSubject.next(userId);
    // });

    // // this.socket.on('user-joined', (userId: string) => {
    // //   this.socket.emit('join-live-stream');
    // // });

    // this.socket.on('video-stream', (data) => {
    //   this.handleVideoStream(data);
    // });


    // this.socket.on('offer', async (offer) => {
    //   if (!this.peerConnection) {
    //     await this.createPeerConnection();
    //   }
    //   await this.peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    //   const answer = await this.peerConnection.createAnswer();
    //   await this.peerConnection.setLocalDescription(answer);
    //   this.socket.emit('answer', answer);
    // });

    // this.socket.on('answer', async (answer) => {
    //   await this.peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    // });

    // this.socket.on('ice-candidate', async (candidate) => {
    //   try {
    //     await this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    //   } catch (e) {
    //     console.error('Error adding received ice candidate', e);
    //   }
    // });

   }
  ngOnInit(): void {

  }

   sendVideoforLiveStreaming(chunk: Blob) {
    this.socket = io('http://localhost:3000/assets/live-session/start-live-session', { transports: ['websocket'] });
    this.socket.emit('video-stream', chunk);
  }

    // Emit video chunks to the server
    sendVideoChunk(chunk: Blob): void {
      this.socket.emit('video-stream', chunk);
    }
   


   // fully final
  //  joinLiveStream() {
  //   this.socket.emit('join-live-stream');
  // }

  // Use fromEvent to create observables for each socket event
  
  on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  onUserJoined(): Observable<string> {
    return fromEvent<string>(this.socket, 'user-joined');
  }

  // onVideoStream(): Observable<Blob> {
  //   return fromEvent<Blob>(this.socket, 'video-stream');
  // }
  onVideoStream(callback: (chunk: Blob) => void): void {
    this.socket.on('video-stream', callback);
  }

   // Listen to stream stopped events
   onStreamStopped(callback: () => void): void {
    this.socket.on('stream-stopped', callback);
  }

  sendOffer(offer: any) {
    this.socket.emit('offer', offer);
  }

  sendAnswer(answer: any) {
    this.socket.emit('answer', answer);
  }

  sendIceCandidate(candidate: any) {
    this.socket.emit('ice-candidate', candidate);
  }

  sendVideoStream(chunk: Blob) {
    this.socket.emit('video-stream', chunk);
  }

  receiveUserJoined(): Observable<Blob> {
    return fromEvent<Blob>(this.socket, 'user-joined');
  }

  stopStream() {
    this.socket.emit('stop-stream');
  }

  onUpdateUsers(): Observable<string[]> {
    return fromEvent<string[]>(this.socket, 'update-users');
  }

  streamStopped(): Observable<Blob> {
    return fromEvent<Blob>(this.socket, 'stream-stopped');
  }



  joinLiveStream(roomId: string, userId: string, isAdmin: boolean) {
    this.socket.emit('join-live-stream', { roomId, userId, isAdmin });
  }

  onStreamEnded() {
    return fromEvent<Blob>(this.socket, 'stream-ended');
  }








   startStream() {
    this.socket.emit('start-stream');
  }

  onVideoStreamsasss(): Observable<Uint8Array> {
    return new Observable(observer => {
      this.socket.on('video-stream', (chunk: unknown) => {
        if (chunk instanceof ArrayBuffer) {
          observer.next(new Uint8Array(chunk));
        }
      });

      this.socket.on('video-stream-end', () => {
        observer.complete();
      });
    });
  }

  //  sendVideoChunk(blob: Blob) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const arrayBuffer = reader.result as ArrayBuffer;
  //     this.socket.emit('video-stream', arrayBuffer);
  //   };
  //   reader.readAsArrayBuffer(blob);
  // }

  endStream() {
    this.socket.emit('end-stream');
  }

  onVideoStreamOldd(): Observable<Blob> {
    return new Observable(observer => {
      this.socket.on('video-stream', (chunk: ArrayBuffer) => {
        const blob = new Blob([chunk], { type: 'video/mp4' });
        observer.next(blob);
      });
    });
  }

  onUserList(): Observable<any[]> {
    return new Observable(observer => {
      this.socket.on('userList', (users: any[]) => {
        observer.next(users);
      });
    });
  }

   // fresh live streaming video 

   join(username: string) {
    this.socket.emit('join', username);
  }

  leave() {
    this.socket.emit('leave');
  }

  getUserList(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('updateUserList', (users) => {
        observer.next(users);
      });
    });
  }

  sendStream(chunk: Blob) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.socket.emit('stream', reader.result);
    };
    reader.readAsArrayBuffer(chunk);
  }

  saveVideo(buffer: ArrayBuffer, filename: string) {
    this.socket.emit('saveVideo', { buffer, filename });
  }

  onStream(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('stream', (chunk) => {
        observer.next(chunk);
      });
    });
  }


   // above fresh live streaming code



   // for multiple camera 

  //  on(eventName: string, callback: any) {
  //   this.socket.on(eventName, callback);
  // }

  // emit(eventName: string, data: any) {
  //   this.socket.emit(eventName, data);
  // }

   //second method 

   async joinLiveStreamsss() {
    this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    const localVideoElement = document.querySelector('video#localVideo') as HTMLVideoElement;

    // const localVideoElement = document.getElementById('localVideo') as HTMLVideoElement;
    if (localVideoElement) {
      localVideoElement.srcObject = this.localStream;
    }

    this.socket.emit('join-live-stream');

    await this.createPeerConnection();
    this.localStream.getTracks().forEach(track => {
      this.peerConnection.addTrack(track, this.localStream);
    });
  }
   
  private async createPeerConnection() {
    this.peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });

    this.peerConnection.onicecandidate = ({ candidate }) => {
      if (candidate) {
        this.socket.emit('ice-candidate', candidate);
      }
    };

    this.peerConnection.ontrack = ({ streams: [stream] }) => {
      this.remoteStream = stream;
      // const remoteVideoElement = document.getElementById('remote-video') as HTMLVideoElement;
      const remoteVideoElement = document.querySelector('video#remoteVideo') as HTMLVideoElement;

      if (remoteVideoElement) {
        remoteVideoElement.srcObject = this.remoteStream;
      }
    };

    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    this.socket.emit('offer', offer);
  }



  //  joinLiveStream() {
  //   this.socket.emit('join-live-stream');
  // }

  handleVideoStream(data: any) {
    const videoElement = document.getElementById('live-video-join') as HTMLVideoElement;
    const blob = new Blob([data], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    videoElement.src = url;
  }

  
   sendStreamOld(data: Blob) {
    this.socket.emit('video-stream', data);
  }
  
  onStreamOld() {
    return new Observable<Blob>((observer) => {
      this.socket.on('video-stream', (data: Blob) => {
        observer.next(data);
      });
    });
  }
  
  onVideoStreamOld(): Observable<Blob> {
    return new Observable<Blob>((observer) => {
      this.socket.on('video-stream', (chunk) => {
        observer.next(new Blob([chunk], { type: 'video/mp4' }));
      });

      this.socket.on('video-stream-end', () => {
        observer.complete();
      });
    });
  }



  // second method

  private setupSocketListeners() {
    this.socket.on('offer', async (data) => {
      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data));
      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answer);
      this.socket.emit('answer', answer);
    });

    this.socket.on('answer', async (data) => {
      await this.peerConnection.setRemoteDescription(new RTCSessionDescription(data));
    });

    this.socket.on('candidate', async (data) => {
      await this.peerConnection.addIceCandidate(new RTCIceCandidate(data));
    });
  }

  public async setupMediaStream(): Promise<MediaStream> {
    this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    this.localStream.getTracks().forEach(track => this.peerConnection.addTrack(track, this.localStream));
    return this.localStream;
  }

  public startBroadcasting() {
    this.peerConnection.createOffer().then(offer => {
      this.peerConnection.setLocalDescription(offer);
      this.socket.emit('offer', offer);
    });
  }

  public stopBroadcasting() {
    this.localStream.getTracks().forEach(track => track.stop());
    this.peerConnection.close();
  }

}
