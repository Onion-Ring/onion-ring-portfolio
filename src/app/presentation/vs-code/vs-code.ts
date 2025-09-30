import { Component } from '@angular/core';
import { TopMenu } from "./top-menu/top-menu";
import { LeftMenuBar } from './left-menu-bar/left-menu-bar';
import { LeftMenuProjectExplorer } from './left-menu-project-explorer/left-menu-project-explorer';
import { FileVisualizer } from './file-visualizer/file-visualizer';
import { Terminal } from './terminal/terminal';

@Component({
  selector: 'app-vs-code',
  imports: [TopMenu, LeftMenuBar,LeftMenuProjectExplorer,FileVisualizer,Terminal],
  templateUrl: './vs-code.html',
  styleUrl: './vs-code.css'
})

export class VsCode {






}