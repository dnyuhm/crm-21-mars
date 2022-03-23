import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public numberVersion!: number;

  constructor(private versionService: VersionService) {
    this.versionService.numVersion$.subscribe(
      (data) => (this.numberVersion = data)
    );
  }
  ngOnInit(): void {}
}
