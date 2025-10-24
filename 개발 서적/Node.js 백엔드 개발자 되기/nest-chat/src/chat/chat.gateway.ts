import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// 웹소켓을 통한 통신을 받기 위한 게이트웨이 생성
@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer() server: Server; // 웹소켓 서버 인스턴스 선언

  @SubscribeMessage('message') // message 이벤트 구독
  handleMessage(socket: Socket, data: any) {
    const { message, nickname } = data;

    socket.broadcast.emit('message', `${nickname}: ${message}`);

    // 접속한 클라이언트들에게 메시지 전송
    // this.server.emit('message', `client-${socket.id.substring(0, 4)}: ${data}`);
  }
}

@WebSocketGateway({ namespace: 'room' })
export class RoomGateway {
  rooms: any[] = [];

  @WebSocketServer()
  server: Server;

  constructor(private readonly chatGateway: ChatGateway) {}

  @SubscribeMessage('createRoom')
  handleMessage(@MessageBody() data) {
    const { room, nickname } = data;

    // 방 생성 시 공지사항 이벤트 발생
    this.chatGateway.server.emit('notice', {
      message: `${nickname}님이 ${room} 방을 생성했습니다.`,
    });
    this.rooms.push(room);
    this.server.emit('rooms', this.rooms);
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(socket: Socket, data: any) {
    const { room, nickname, toLeaveRoom } = data;

    // 기존의 방에서 먼저 퇴장
    socket.leave(toLeaveRoom);

    // 공지사항 이벤트 발생
    this.chatGateway.server.emit('notice', {
      message: `${nickname}님이 ${room} 방에 참여했습니다.`,
    });

    // 새로운 방 입장
    await socket.join(room);
  }

  @SubscribeMessage('message')
  handleMessageToRoom(socket: Socket, data: any) {
    const { message, nickname, room } = data;

    socket.broadcast.to(room).emit('message', {
      message: `${nickname}: ${message}`,
    });
  }
}
