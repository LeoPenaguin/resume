<template>
  <div class="section" id="section-2">
    <h1><i class="fa fa-building-o" aria-hidden="true"></i>Experience</h1>
    <div class="section-center">

      <div class="exp-item-large">
        <div class="icon-box">
          <WorkIcon/>
          <StarIcon/>
        </div>
        <h2>Fullstack developer 2018 - Now</h2>
        <p><b>Smart Mobile Factory GmBH - Berlin, Germany</b><br />
          Context: Fullstack developer within an agency developing mobile applications. (iOS, Android, MacOS)</p>
        <ul>
          <li>Developing REST APIs with the Symfony PHP framework</li>
          <li>Developing web applications with VueJS and Angular</li>
          <li>Working directly with clients, being a source of proposals.</li>
          <li>Working as a team with Git and Github.</li>
          <li>Continuous development with Jenkins and Git</li>
          <li>Agile: Sprint, Daily stand up, Grooming, Scrum with Jira</li>
          <li>Write unit tests for controllers, entities, services, routes.</li>
          <li>Use static code analysis tools</li>
          <li>Securing APIs</li>
          <li>Configure administration interfaces to manage data</li>
          <li>Developing services in Golang</li>
          <li>Updating sites running on Wordpress</li>
          <li>Participate in an OKR team to improve the company's image. (logo, colours)</li>
          <li>Configure and extend Parse server</li>
          <li>Transfer data from one database to another</li>
          <li>Finding, analysing and aggregating company data to extract key performance indicators (KPIs).</li>
        </ul>
      </div>

      <div class="exp-item-large">
        <div class="icon-box">
          <WorkIcon/>
        </div>
        <h2>JAVA developer 2016 - 2018</h2>
        <p><b>Crédit Agricole - Grenoble, France</b><br />
          Context: JAVA developer in the IT department of a major French bank.</p>
        <ul>
          <li>SOAP API development in Java</li>
          <li>Teamwork</li>
          <li>Using Redis</li>
        </ul>
      </div>

      <div class="exp-item-large">
        <div class="icon-box">
          <WorkIcon/>
        </div>
        <h2>C# developer 2015 - 2016</h2>
        <p><b>HM Clause - Valence, France</b><br />
          Context: C# developer within a French company specialised in field seeds.</p>
        <ul>
          <li>Windows form application with C#</li>
          <li>Postgres</li>
        </ul>
      </div>

      <ul class="exp-item-list">
        <li ng-switch="!!experience.link"><a target="_blank" href="http://mediacraft.fr" class="exp-item">
            <div class="icon-box">
              <WorkIcon/>
            </div>
            <div class="icon-box"></div>
            <p><b>March 2015 (6 months)</b></p>
            <h2 class="entreprise"> Mediacraft </h2>
            <p><b>Internship</b> : Front-end web development<br></p><span class="location"> Grenoble, France </span>
          </a>
        </li>

        <li ng-switch="!!experience.link"><a target="_blank" href="http://smartmobilefactory.com/" class="exp-item">
            <div class="icon-box">
              <WorkIcon/>
            </div>
            <p><b>March 2014 (6 months)</b></p>
            <h2 class="entreprise"> Smart Mobile Factory </h2>
            <p><b>Internship</b> : Symfony API development for mobile applications<br></p><span class="location">
              Berlin, Germany </span>
          </a>
        </li>

        <li ng-switch="!!experience.link"><a target="_blank" href="https://www.credit-agricole.fr" class="exp-item">
            <div class="icon-box">
              <WorkIcon/>
            </div>
            <p><b>January 2013 (1 month)</b></p>
            <h2 class="entreprise"> Crédit Agricole </h2>
            <p><b>Internship</b> : Crédit Agricole IT maintenance<br></p><span class="location"> Grenoble, France
            </span>
          </a>
        </li>

        <li ng-switch="!!experience.link"><a target="_blank" href="https://www.agentur-webfox.de" class="exp-item">
            <div class="icon-box">
              <WorkIcon/>
            </div>
            <p><b>May 2012 (3 months)</b></p>
            <h2 class="entreprise"> Agentur Webfox </h2>
            <p><b>Internship</b> : Web front-end development and web design<br></p><span class="location"> Berlin,
              Germany </span>
          </a>
        </li>

        <li ng-switch="!!experience.link"><a target="_blank" href="http://www.svd-studio.fr/" class="exp-item">
            <div class="icon-box">
              <WorkIcon/>
            </div>
            <p><b>December 2007 (1 month)</b></p>
            <h2 class="entreprise"> SVD Studio </h2>
            <p><b>Internship</b> : Design in an advertising agency / web design agency<br></p><span class="location">
              Valence, France </span>
          </a>
        </li>

        <li ng-switch="!!experience.link"><a target="_blank" href="http://www.bymicro.com" class="exp-item">
            <div class="icon-box">
              <WorkIcon/>
            </div>
            <p><b>December 2006 (1 month)</b></p>
            <h2 class="entreprise"> By Micro </h2>
            <p><b>Internship</b> : IT maintenance in a specialized company<br></p><span class="location"> Romans, France
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import WorkIcon from '@/components/icons/Work'
  import StarIcon from '@/components/icons/Star'

  export default {
    name: 'ExperienceProfessionnelle',
    components: {
      WorkIcon,
      StarIcon
    }
  }
</script>