/**
 * Created by Laurence Ho on 07-02-2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CampgroundService} from '../../services/campgounds.service';
import {Campground} from '../../models/campground';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'camps',
    templateUrl: './app/components/campgrounds/campgrounds.component.html',
    styleUrls: ['./app/components/campgrounds/campgrounds.component.css']
})

export class CampgroundsComponent implements OnInit {
    camps: Campground[];

    userdata: any;

    constructor(private router: Router, private campService: CampgroundService, private userService: UserService) {
        this.userdata = userService.getUserData();
    }

    getCamps() {
        this.campService.getCamps().then(camps => this.camps = camps);
    }

    ngOnInit() {
        this.getCamps();
    }

    gotoDetail(id: number) {
        this.router.navigate(['/campground', id]);
    }

    addCampground() {
        this.router.navigate(['/campground', 'new']);
    }
}
