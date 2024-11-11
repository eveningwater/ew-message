import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ewMessage from 'ew-message';
import { ewMessageEnumType } from 'ew-message/typings/const/enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ew-message-angular-demo';
  messageList = [
    {
      type: "info",
      content: "默认消息提示框"
    },
    {
      type: "loading",
      content: "加载中消息提示框"
    },
    {
      type: "success",
      content: "成功消息提示框"
    },
    {
      type: "error",
      content: "错误消息提示框"
    },
    {
      type: "warning",
      content: "警告消息提示框"
    }
  ];

  showMessage(type: string, content: string) {
     return ewMessage[type as ewMessageEnumType](content);
  }
}
