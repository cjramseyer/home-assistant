![HALogo](https://github.com/cjramseyer/home-assistant/blob/main/images/homeassistant-1920x1080.jpg)

# Home Assistant Configuration

This is the source of my configuration for Home Assistant

----

## What is Home Assistant

Home Assistant is a free and open-source home automation software designed to be the central home automation control system for controlling smart home technology. Home Assistant "core" application software itself is written in Python and its main focus is on local-control and privacy.

----

## Current Configuration

- Home Assistant Version: v2021.2.2
- HassOS Version: 5.10
- Config Date: 2/6/2021

**Operating Environment:** Dell OptiPlex 3040 - i3-6100T, 16GB RAM, 240GB SSD, ProxMox, HA Supervised

----

## Add-ons installed

- AppDaemon 4
- DuckDNS
- ESPHome
- File editor (Removed)
- Mosquitto broker
- Node-Red
- Samba share
- Terminal & SSH
- chrony
- ink to MQTT
- VSCode (Replaced File Editor)
- Grafana
- InfluxDB
- JupyterLab

----

## Purpose

The purpose of my use of Home Assistant is to automated our home as much as possible, while continuing to maintain the basic functionality of any automated device.
Switches still function as switches even after they have been made "smart".
A complete failure of the home automation should not cause a failure of anything setup to manage or protect the home.
For example, a failure of home assistant may prevent remote monitoring of a sensor, but will not cause a critical device (sump pump) to cease to function 
(outside the failure of the device itself).

This is the configuration of my Home Assistant as of the date listed above.  This is, and will forever be a work in-progress.
Files located here represent a fully functional configuration at the time they were committed to Github.
Interim updates and potential non-working versions might be found in a seperate branch.

You are free to use my config or any part of it, but I will have no responsibility for its use or damage that may result
from its application in another config or any changes that are made.

Private information is deliberately removed and will not be revealed, however, you may contact me for suggestions or guidance
on how it was used.  I can be contacted via email @ cj@ciejepro.com.  I may not be able to respond quickly, please be patient.

As of a totally failed/botched upgrade to 0.105.2/3, I am now maintaining a "dev" instance of Home Assistant.
This "dev" instance has all the same software installed, and is upgraded prior to upgrading my prod instance.
While Node-Red is running in dev, most of the automations themselves have been disabled (i.e. turning on the side entry when someone gets homes)
This is so automations don't conflict with one another.

I also try "new" things, such as configuration changes, and/or add-ons.

A big change has been that I did not install MotionEye this time.  I think that might have been part of my problem.
I am going to re-add cameras to the front-end again, but if I use MotionEye, it will run on a seperate box.  (more to come on this...)

### 1-2-2020

After upgrading to Home Assistant 2020.12.0 I started to notice a steady exhaustion of memory.  This was idfficult to track down and hopefully I have remediated it.
Long story short, this started with a reboot at least once a day, and checking all of my automations, addons, and the rest of my configuration.  In the end, I shutdown all the HA addons except Node-Red and AppDaemon4, though still a little higher than I would prefer, the memory use seems to have stablilized at about 65%.  I have moved my moquitto broker to another rPi to run it.


### 2-7-2021

Following a couple weeks since my migration to proxmox from rPi3B+ for my HA instance, everything is quicker and considerably more stable.  I have room to update my HA instance should it be necessary.  Future upgrades this year will include setting up a proxmox cluster.  HA doesn't have (yet) cluster capabilities or multi-instance failover.  This will be important to garner further acceptance for the larger installations.  My own setup will be a proxmox cluster, but I'd like to try a Raspberry pi cluster to have a single box solution.

----

## How to contribute

I welcome new ideas, suggestions for improvement, and examples being used in the real world.  I am also interested in solving problems.
These can all be acheived by opening an issue in this repository.  

----
