![HALogo](https://github.com/cjramseyer/home-assistant/blob/main/images/homeassistant-1920x1080.jpg)

# Home Assistant Configuration

This is the source of my configuration for Home Assistant

----

## What is Home Assistant

Home Assistant is a free and open-source home automation software designed to be the central home automation control system for controlling smart home technology. Home Assistant "core" application software itself is written in Python and its main focus is on local-control and privacy.

----

## Current Configuration

- Home Assistant Version: v2022.12.1
- HassOS Version: 9.4
- Config Date: 12/29/2022

**Operating Environment:** Dell OptiPlex 3040 - i3-6100T, 16GB RAM, 240GB SSD, ProxMox, HA Supervised

----

## Add-ons installed (as of: 03/25/2023)

- DuckDNS
- ESPHome
- Mosquitto broker
- Node-Red
- Samba share
- SSH & Web Terminal
- chrony
- Studio Code Server
- Cloudflared
- Maria DB

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
on how it was used.  I can be contacted via email @ cj@ramseyer.org.  I may not be able to respond quickly, please be patient.

### 3-25-2023

I have moved on from AppDaemon.  While it never failed to function, and remained "usable", it was not "pretty", and could not really be customized in ways similar to HA dashboards.  Though I would still prefer a dashboard solution to have them not require a user id and password that must be maintained, perhaps it's better this way.  climate management has been near completely moved into HA.  We currently have the Nest thermostat, and it's "smarts" aren't really that smart anymore.  All of it's smart functions have been disabled on the thermostat itself, and the intelligience (i.e. when we are home versus away versus vacation.  When everyone is sleeping.  When someone is too warm or cold) has been moved into HA.  Climate is a funny and complex thing to manage.  While the house might not be "cold", someone might feel cold for a variety of reasons.  My goal is to add data and inteligience to this all within HA.  This also enables me to switch to another smart thermostat in the future, requiring little, if any change.
Now over 2 years running HA on a VM under proxmox.  Still running very stable, and reliable.  My next big task is room occupancy.

### 12-29-2022

I have upgraded to the (currently) latest version of HA, and it was by far the fastest, and easiest.  Though I was a little concerned with the python update back in June, I had held off, wondering if I was going to have any significant failures.  Thankfully, I had none.  The HA journey continues.
I am updating my automations, and still using NodeRed.  Now, though, I am taking a slightly different approach.  I am not splitting things up as much as before.

### 2-7-2021

Following a couple weeks since my migration to proxmox from rPi3B+ for my HA instance, everything is quicker and considerably more stable.  I have room to update my HA instance should it be necessary.  Future upgrades this year will include setting up a proxmox cluster.  HA doesn't have (yet) cluster capabilities or multi-instance failover.  This will be important to garner further acceptance for the larger installations.  My own setup will be a proxmox cluster, but I'd like to try a Raspberry pi cluster to have a single box solution.

### 1-2-2020

After upgrading to Home Assistant 2020.12.0 I started to notice a steady exhaustion of memory.  This was difficult to track down and hopefully I have remediated it.
Long story short, this started with a reboot at least once a day, and checking all of my automations, addons, and the rest of my configuration.  In the end, I shutdown all the HA addons except Node-Red and AppDaemon4, though still a little higher than I would prefer, the memory use seems to have stablilized at about 65%.  I have moved my moquitto broker to another rPi to run it.


----

## How to contribute

I welcome new ideas, suggestions for improvement, and examples being used in the real world.  I am also interested in solving problems.
These can all be acheived by opening an issue in this repository.  

----
