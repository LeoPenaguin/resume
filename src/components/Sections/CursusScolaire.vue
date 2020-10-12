<template>
  <div class="section" id="section-3">
    <h1>Academic background</h1>
    <div class="section-center">
      <ul class="exp-item-list">
        <li ng-switch="!!cur.url"><span class="cursus-item">
            <div class="icon-box">
              <EducationIcon/>
              <StarIcon/>
            </div>
            <h2>January 2019 <span>2 years</span></h2>
            <p><b>Master in Computer Science</b> - "Expert in Computer Science and Information Systems"</p><span
              class="location"><span>EPSI Grenoble, France</span></span>
          </span></li>
        <li ng-switch="!!cur.url"><span class="cursus-item">
            <div class="icon-box">
              <EducationIcon/>
            </div>
            <h2>October 2018</h2>
            <p><b>TOEIC</b> - Test of English for International Communication : 895 points</p><span
              class="location"><span>EPSI Grenoble, France</span></span>
          </span></li>
        <li ng-switch="!!cur.url"><span class="cursus-item">
            <div class="icon-box">
              <EducationIcon/>
            </div>
            <h2>January 2016 <span>3 years</span></h2>
            <p><b>Bachelor</b> - Bachelor's degree in computer science and development</p><span
              class="location"><span>EPSI Grenoble, France</span></span>
          </span></li>
        <li ng-switch="!!cur.url"><span class="cursus-item">
            <div class="icon-box">
              <EducationIcon/>
            </div>
            <h2>October 2013 <span>2 years</span></h2>
            <p><b>DEUST</b> - "Webmaster and Internet professions"</p><span class="location"><span>Limoges,
                France</span></span>
          </span></li>
        <li ng-switch="!!cur.url"><span class="cursus-item">
            <div class="icon-box">
              <EducationIcon/>
            </div>
            <h2>January 2013 <span>2 years</span></h2>
            <p><b>BTS SIO</b> - BTS Service Informatique aux Organisations Option réseaux et télécommunications</p><span
              class="location"><span>Valence, France</span></span>
          </span></li>
        <li ng-switch="!!cur.url"><span class="cursus-item">
            <div class="icon-box">
              <EducationIcon/>
            </div>
            <h2>January 2011</h2>
            <p><b>Bachelor degree</b> - Computer science bachelor degree</p><span class="location"><span>Valence,
                France</span></span>
          </span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import EducationIcon from '@/components/icons/Education'
  import StarIcon from '@/components/icons/Star'

  export default {
    name: 'CursusScolaire',
    components: {
      EducationIcon,
      StarIcon
    }
  }
</script>