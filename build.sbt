name := """retsplay"""
organization := "io.53rg3"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += filters

// https://mvnrepository.com/artifact/com.github.javafaker/javafaker
libraryDependencies += "com.github.javafaker" % "javafaker" % "0.14"
