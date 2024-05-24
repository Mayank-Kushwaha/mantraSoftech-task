document.addEventListener("DOMContentLoaded", () => {
    const list = {
      logo1: {
        bold: "1M+ downloads and counting",
        text: "Blue Dart Express is an Indian logistics company that provides courier delivery services. It is headquartered in Mumbai, Maharashtra. It has a subsidiary cargo airline, Blue Dart Aviation that operates in South Asian countries. Wikipedia",
      },
      logo2: {
        bold: "500K+ users",
        text: "PVR INOX Ltd, formerly known as PVR Cinemas, is an Indian multiplex chain based in Mumbai. It was formed as a result of the merger between PVR Cinemas and INOX Leisure Multiplex. PVR pioneered the multiplex revolution in India by establishing the first multiplex cinema in 1997 at Saket, New Delhi.",
      },
      logo3: {
        bold: "2M+ devices sold",
        text: "Tata Consultancy Services Limited is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 150 locations across 46 countries. In March 2024, it was reported that TCS had more than 601,546 employees worldwide. ",
      },
      logo4: {
        bold: "Blockchain technology",
        text: "Coinbase Global, Inc., branded Coinbase, is an American publicly traded company that operates a cryptocurrency exchange platform. Coinbase is a distributed company; all employees operate via remote work. It is the largest cryptocurrency exchange in the United States in terms of trading volume. ",
      },
      logo5: {
        bold: "Leading in Health Tech",
        text: "Offering a wide array of medicines, wellness products, and healthcare essentials, India's leading online pharmacy simplifies the process of accessing healthcare products. The business allows customers to seamlessly order medicines online and ensures prompt delivery to their doorstep.",
      },
      logo6: {
        bold: "Telecom leader",
        text: "Jio is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Navi Mumbai, Maharashtra. It operates a national LTE network with coverage across all 22 telecom circles. Jio offers 5G, 4G and 4G+ services all over India and 5G service almost All Over India.",
      },
      logo7: {
        bold: "Digital payments",
        text: "Paytm is an Indian multinational financial technology company, that specializes in digital payments and financial services, based in Noida, India. Paytm was founded in 2010 by Vijay Shekhar Sharma under One97 Communications. ",
      },
      logo8: {
        bold: "Higher education",
        text: "Unacademy is an Indian multinational educational technology company that provides online educational platform with its headquarters in Bangalore. It prepares students for various competitive exams, as well as provides content on foundational and skill building courses.",
      },
    };
  
    const buttons = document.querySelectorAll(".text-overlay p");
    const logos = document.querySelectorAll(".logo");
    const boldTxt = document.querySelector(".bold-txt");
    const descrpTxt = document.querySelector(".descrp-txt");
  
    let currentIndex = 0;
    let intervalId;
  
    function showLogo(index) {
      const logoKey = `logo${index + 1}`;
      const logoInfo = list[logoKey];
  
      logos.forEach((logo, i) => {
        if (i === index) {
          logo.style.opacity = 1;
        } else {
          logo.style.opacity = 0;
        }
      });
  
      boldTxt.textContent = logoInfo.bold;
      descrpTxt.textContent = logoInfo.text;
  
      // Toggle hover-effect class on buttons
      buttons.forEach((button, i) => {
        if (i === index) {
          button.classList.add('hover');
        } else {
          button.classList.remove('hover');
        }
      });
    }
  
    function cycleLogos() {
      logos.forEach((logo) => {
        logo.style.opacity = 0;
      });
      showLogo(currentIndex);
      currentIndex = (currentIndex + 1) % logos.length;
    }
  
    intervalId = setInterval(cycleLogos, 2000);
  
    buttons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        clearInterval(intervalId);
        const logoKey = button.getAttribute("data-logo");
        showLogo(Number(logoKey.slice(4)) - 1);
      });
  
      button.addEventListener("mouseout", () => {
        intervalId = setInterval(cycleLogos, 2000);
      });
    });
  });
  