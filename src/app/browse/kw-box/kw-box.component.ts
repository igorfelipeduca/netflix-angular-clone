import { Component, Input, OnInit } from '@angular/core';

interface KeepWatchingBoxProps {
  picUrl: string;
  name: string;
}

@Component({
  selector: 'app-kw-box',
  templateUrl: './kw-box.component.html',
  styleUrls: ['./kw-box.component.scss'],
})
export class KwBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() kwProps: KeepWatchingBoxProps | undefined;
}
