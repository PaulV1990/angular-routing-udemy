import {Component, OnInit} from '@angular/core';
import {ServersService} from './servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // Router knows the path it's in with ActivatedRoute.
    // This way it is navigating the relative path servers onto the current route.
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
