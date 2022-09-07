import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface KeepWatchingBoxProps {
  picUrl: string;
  name: string;
}

interface userInterface {
  name: string;
  picUrl: string;
  id: string;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  userId: string = '';
  user: userInterface | undefined;
  kwList: KeepWatchingBoxProps[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    const keepWatchingList: KeepWatchingBoxProps[] = [
      {
        picUrl:
          'https://occ-0-2272-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ2eejwOmFWqyOd0caBviCBDM1tWDBRunzwQDiD-3eeBNp7Wy-dCxxPsm5zxpuSRyh5E0gZAejeJp20KYnrJZefTBkyGu9etx2k.webp?r=01d',
        name: 'breaking bad',
      },
      {
        picUrl:
          'https://occ-0-2272-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ8d-o7DSRST-RZOJNyuAYd94GCWA5eD3GjorQM1ABGnZyjUsPkax2NmIJXOQnCSdWgluJSlQ1zOBgHFgmNL8HnG3zXrFmOCRzU.webp?r=615',
        name: 'the flash',
      },
      {
        picUrl:
          'https://occ-0-2272-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRg8-i0VS6XDNheUDi0R4BJXsNivwrccWDr6U-jbWX_P-0kMCYNVBoM1eieZU9bOyOXBXZI38lFrlluhzv1mL1Lhp06gn2ojChgjYZQjrEmf7C1t4Id2SJ41jpKbyKlAXmO32pF3mhFqlZ7-GgaXzSAsFZUhNaRJ2NMfIF3vt3hqRD6lJLVo59Jg3Q63A8m9HgkrWFSDniJpzv65mkMu06x_bEKVBARGyygDWEpG5mFHU3r0tDtFSaCXDl7DGLeFEYAfmHDRsiuzr_E3Y2G0tECQVXXQoOWu515iVYGgDh9QAD_EyfKHjmUbCfgLV_h14oarl7rpfgG_yYYM4vaRz-L44Y0AeNsJoREnfkOgkU08UB0rSTV20vJXi9S8R1pr-Sh-6hWUrGUHrh4WYQykwDQsmQSteRFkFU53aDb_coYg7VeZEFRiycI.jpg?r=696',
        name: 'better call saul',
      },
      {
        picUrl:
          'https://occ-0-2272-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcb6JjZIkr2BgPaFEUydKD9WV3OBssgWTHmmoSvV8E6TAJ3i5TNF6vGZNVOKBO7TTbvnq0Q_ujR2dvAx0lb3sgE3VyoQaBN0U_4.webp?r=ced',
        name: 'brooklyn 99',
      },
      {
        picUrl:
          'https://occ-0-2272-420.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaVkM3tEudCArsRWfXOkHw2L0aK3V9QtGhcBUgb4dTWlIWiR8vAS7170n_iUNv69sDwXZX2jLHurWun6nu9eES0snBXlyFTM2DM.webp?r=fcd',
        name: 'spider-man far from home',
      },
    ];

    this.route.queryParams.subscribe((params: any) => {
      console.log(params); // { order: "popular" }

      this.userId = params.userId;
      console.log(this.userId); // popular
    });

    this.userService.getUsers().map((user) => {
      if (user.id === this.userId) {
        console.log(user);
        this.user = user;
      }
    });

    this.kwList = keepWatchingList;
  }
}
