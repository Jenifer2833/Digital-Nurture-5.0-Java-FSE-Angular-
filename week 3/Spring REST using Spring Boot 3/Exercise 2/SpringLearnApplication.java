package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {

        LOGGER.info("START");

        displayCountry();

        LOGGER.info("END");
    }
    public static void displayCountry() {

        LOGGER.info("Inside displayCountry()");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        LOGGER.info("Context created");

        Country country = context.getBean("country", Country.class);

        LOGGER.info("Bean loaded");

        LOGGER.info("Country : {}", country);
    }

}
