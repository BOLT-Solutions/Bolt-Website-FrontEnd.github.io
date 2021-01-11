import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent implements OnInit {

  technicalTeamImage: string = 'technical-icon-clicked';
  marketingTeamImage: string = 'marketing-icon';
  businessTeamImage: string = 'business-icon';
  pmTeamImage: string = 'pm-icon';
  qaTeamImage: string = 'qa-icon';
  uiTeamImage: string = 'ui-icon';
  constructor() { }

  ngOnInit(): void {
    this.DisplayTeam('technicalTeam');
  }

  DisplayTeam(selectedTeam) {
    //Capture documents
    var technicalTeam = document.getElementById('technicalTeam').querySelector('.row');
    var marketingTeam = document.getElementById('marketingTeam').querySelector('.row');
    var businessTeam = document.getElementById('businessTeam').querySelector('.row');
    //var qaTeam = document.getElementById('qaTeam').querySelector('.row');
    //var uiTeam = document.getElementById('uiTeam').querySelector('.row');
    //var pmTeam = document.getElementById('pmTeam').querySelector('.row');

    //Toggle Show animation and enable document
    if (selectedTeam == "technicalTeam" && !technicalTeam.classList.contains('displayTeam')) {
      if (marketingTeam.classList.contains('displayTeam')) {
        this.marketingTeamImage = 'marketing-icon';
        marketingTeam.classList.remove('displayTeam');
        marketingTeam.classList.add('hideTeam');
        setTimeout(() => {
          marketingTeam.classList.remove('hideTeam');
          document.getElementById('marketingTeam').style.display = 'none';
        }, 1000);
      }
      else if (businessTeam.classList.contains('displayTeam')) {
        this.businessTeamImage = 'business-icon';
        businessTeam.classList.remove('displayTeam');
        businessTeam.classList.add('hideTeam');
        setTimeout(() => {
          businessTeam.classList.remove('hideTeam');
          document.getElementById('businessTeam').style.display = 'none';
        }, 1000);
      }
      this.technicalTeamImage = 'technical-icon-clicked';
      document.getElementById('technicalTeam').style.display = 'block';
      technicalTeam.classList.add('displayTeam');
    }
    //Toggle Hide Animation and disable document
    else if (selectedTeam == "technicalTeam" && technicalTeam.classList.contains('displayTeam')) {
      this.technicalTeamImage = 'technical-icon';
      technicalTeam.classList.remove('displayTeam');
      technicalTeam.classList.add('hideTeam');
      setTimeout(() => {
        technicalTeam.classList.remove('hideTeam');
        document.getElementById('technicalTeam').style.display = 'none';
      }, 1000);
    }
    else if (selectedTeam == "marketingTeam" && !marketingTeam.classList.contains('displayTeam')) {
      if (technicalTeam.classList.contains('displayTeam')) {
        this.technicalTeamImage = 'technical-icon';
        technicalTeam.classList.remove('displayTeam');
        technicalTeam.classList.add('hideTeam');
        setTimeout(() => {
          technicalTeam.classList.remove('hideTeam');
          document.getElementById('technicalTeam').style.display = 'none';
        }, 1000);
      }
      else if (businessTeam.classList.contains('displayTeam')) {
        this.businessTeamImage = 'business-icon';
        businessTeam.classList.remove('displayTeam');
        businessTeam.classList.add('hideTeam');
        setTimeout(() => {
          businessTeam.classList.remove('hideTeam');
          document.getElementById('businessTeam').style.display = 'none';
        }, 1000);
      }
      document.getElementById('marketingTeam').style.display = 'block';
      this.marketingTeamImage = 'marketing-icon-clicked';
      marketingTeam.classList.add('displayTeam');
    }
    else if (selectedTeam == "marketingTeam" && marketingTeam.classList.contains('displayTeam')) {
      this.marketingTeamImage = 'marketing-icon';
      marketingTeam.classList.remove('displayTeam');
      marketingTeam.classList.add('hideTeam');
      setTimeout(() => {
        marketingTeam.classList.remove('hideTeam');
        document.getElementById('marketingTeam').style.display = 'none';
      }, 1000);
    }
    else if (selectedTeam == "businessTeam" && !businessTeam.classList.contains('displayTeam')) {
      if (technicalTeam.classList.contains('displayTeam')) {
        this.technicalTeamImage = 'technical-icon';
        technicalTeam.classList.remove('displayTeam');
        technicalTeam.classList.add('hideTeam');
        setTimeout(() => {
          technicalTeam.classList.remove('hideTeam');
          document.getElementById('technicalTeam').style.display = 'none';
        }, 1000);
      }
      else if (marketingTeam.classList.contains('displayTeam')) {
        this.marketingTeamImage = 'marketing-icon';
        marketingTeam.classList.remove('displayTeam');
        marketingTeam.classList.add('hideTeam');
        setTimeout(() => {
          marketingTeam.classList.remove('hideTeam');
          document.getElementById('marketingTeam').style.display = 'none';
        }, 1000);
      }
      this.businessTeamImage = 'business-icon-clicked';
      document.getElementById('businessTeam').style.display = 'block';
      businessTeam.classList.add('displayTeam');
    }
    else if (selectedTeam == "businessTeam" && businessTeam.classList.contains('displayTeam')) {
      this.businessTeamImage = 'business-icon';
      businessTeam.classList.remove('displayTeam');
      businessTeam.classList.add('hideTeam');
      setTimeout(() => {
        businessTeam.classList.remove('hideTeam');
        document.getElementById('businessTeam').style.display = 'none';
      }, 1000);
    }
    console.log(technicalTeam)
    console.log(marketingTeam)
    console.log(businessTeam)
  }
}
