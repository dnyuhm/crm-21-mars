import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public numberVersion!: number;

  constructor(private versionService: VersionService) {
    this.versionService.numVersion$.subscribe(
      (data) => (this.numberVersion = data)
    );
  }

  ngOnInit(): void {}
}
