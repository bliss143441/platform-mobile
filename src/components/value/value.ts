import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { Static } from '../../maps/static';

import { LoggerService } from '../../providers/logger-service';

import { MAPBOX_ACCESS_TOKEN } from '../../constants/secrets';
import { PLACEHOLDER_PHOTO, PLACEHOLDER_MAP } from '../../constants/placeholders';

@Component({
  selector: 'value-text',
  templateUrl: 'value.html',
  inputs: ['value']
})
export class ValueComponent {

  value: any;
  map: string = null;
  video: SafeResourceUrl = null;
  accessToken: string = MAPBOX_ACCESS_TOKEN;
  mapPaceholder: string = PLACEHOLDER_MAP;
  photoPaceholder: string = PLACEHOLDER_PHOTO;

  constructor(
    public logger:LoggerService,
    public sanitizer:DomSanitizer) {
  }

  ngOnInit() {
    this.logger.info(this, "Value", this.value);
    if (this.value && this.value.input == 'location') {
      this.loadMapSrc(this.value.value);
    }
    else if (this.value && this.value.input == 'video') {
      this.loadVideoSrc(this.value.value);
    }
  }

  ngAfterContentChecked() {
    if (this.value && this.value.input == 'location' && this.map == null) {
      this.loadMapSrc(this.value.value);
    }
    else if (this.value && this.value.input == 'video' && this.video == null) {
      this.loadVideoSrc(this.value.value);
    }
  }

  loadMapSrc(coordinates:string) {
    if (coordinates && coordinates.length > 1) {
      let components = coordinates.split(",");
      if (components && components.length > 1) {
        let latitude = Number(components[0]);
        let longitude = Number(components[1]);
        this.map = new Static(latitude, longitude).getUrl();
      }
      else {
        this.map = null;
      }
    }
    else {
      this.map = null;
    }
  }

  loadVideoSrc(url:string) {
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
