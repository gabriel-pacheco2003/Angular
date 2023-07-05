import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {

  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "Joãozinho";

  public incrementa5() {
    this.n1 += 5;
    this.n2 += 5;
  }

  public decrementa5() {
    this.n1 -= 5;
    this.n2 -= 5;
  }

  public urlImg(): string {
    if (this.n1 + this.n2 > 50) {
      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMWFRUVFhcVFhUVFxUYFxcVFhUWFhcVGBYYHSggGBolHRgVITEhJikrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALABHgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYHAf/EAEgQAAIBAgMEBwMIBwYFBQAAAAECAwARBCExBRJBUQYTMmFxgZEiQqEHFFJTYnKSsTOCorLBwtEVI4PS4fBjc5OjszVDdNPi/8QAGwEAAgMBAQEAAAAAAAAAAAAABAUAAgMGAQf/xAA2EQABAwIEAgkEAQQCAwAAAAABAAIDBBESITFBBVETImFxgZGxwfAyodHhFAYjQvGSshUzUv/aAAwDAQACEQMRAD8A7jRRRUURRRRUURRRRUURRRRUURRRRUURRRRUURRUfF4hI1LyMFUakmwrNY7pM75Ydd0fWSA3P3Y/4t6UNU1cVOLyG3qe4araGB8psweOy1MsgUXYgAakmwHnVTP0lwy5K5kPKNS37Q9n41kZVMhvKzStw3zcA/ZTsr5CoHSLaBwsakizvcIGFshqxGth8Takr+OPkdhp2eJ/WniUwbw5jReR3l8v9lqsb00VM+q3RwMsiJfyG9TKdLJnG8iQlTxDsw9QBXKPnc0pJRWYnVzqT46eXCpew5JsNOhnV0ikYLISMgGNg99LjXwvUkqKsizZBi5WA/firthgGrMvFdPHSfEfVxHzcf1p6PpW/vwfgkB+DKPzpbdHxwk9QP61Hl2E47LK3qKw/kcUZnr/AMT+15honbf9grPD9KMO3b3oj/xFIH4hdfjVtDMrgMjBgdCpBHqKw0+FdO0pHfw9dKjIhRt6Nmjbmh3b+I0bzBq8XHntdhnZ5XB8ivH8OY4Xjd7j7LpFFZLA9JpEsJ131+sQe0PvJx8V9K0uExaSKHjYMp4g/DuPdT6mrIaht4nX7Nx3hLpoJIj1x47KRRRRRKxRRRRUURRRRUURRRRUURRRRUURRRRUURRRRUURRRTM0yoCzsFA1LEADzNRRPUVTv0hw495m71jcj1Asadw224HIAexOgcMhPhvgX8qwbVQudgD235XC0MMgFy027lZ0UUVus0UUUVFEVU7Y2ymHAHbkbsxg5n7TH3V7/zpO3trDDqAoDSPfcXh3s3JR8dKyCqxYsxLu59pjqx4eA5DhSjifExTDAzN5+375BHUlH0vXf8AT6/pLxMryt1kzbze6PcTuRf4nM1Y4LZLPm/sj8/LhUrZ2zgntNm3wX/WrLfpJFSmR3SVBuTt+fwEbJU4RgiyHzRNw4aKIEgAWBJY62GZJNc5w+xpdrYl8XLdMPfdjvq0akgKo5aknmTXRpVVlKsAysCCCLgg5EEcRXsYCgKoAAFgBkABoAOApldobhbkOxBgm5O6Y2bsqGBQI0AsLXIF/Xh4DKpxamesGl6N6vWvDRYaLwgk3Ke36N6md6jfqGReYU6WvrWR6eTphoOsT2XdgigWtcgktbhYA917VqN+oe0NnQz7vWoH3CSoOgJFjWUmCQWeL96vGSx1wVxmPbLKd5CwYZ71yb/eufaHjW62BtRnUYiFtxzk66qWGquvEcjrY61d7X6MYaZCojVDbIqLfAViujeHfDYmXCycRvrfjY2uPEH9mhaokDpG5ObmCOXJGwuDuqcwdQV1PYu20n9hvYlAuUJvcfSQ+8vxHGrmucumhBKspurDVTzH9ONavYG2OvBR7LKg9oDRhwde7u4HyJa8L4oKn+3Jk/7H99iBq6Pousz6fT9K7ooopygEUUUVFEUUUVFEUUUVFEUUUVFEUUUVFFX7Xx4hTetdid1F03m5X4DUk8gay4V5pAZW3mJy+it/orw8dTzqZ0jkLYgLwSMW8ZGO98EX40xCONclxerfJOYb9RtrjnoTfz902pYgyMP3K0GHwsSiwUeJzNGJ2fFILMgz5Af7NQosQakJia2bLC5uHCLdyGLHtOIE3UMSPhCLkvAfEtH3jiR9nlpyOgjkDAEEEEXBGhB0Iqvdw6lToagdHMTus2HOgu8fhezr5Egj73dR9HVYZBCTcO+m+oI1bf7jy5KkjC9hfbMa9o5/P96Ooe0sasMbSNovAasTkFHeTYVMrE9Icb1s26D/AHcJI7ml0Y/q9nx3qMrqoU0JkOu3f8zKrTQdNIG7bqveR3dpZDd315KBoi9w+OZ41bbKw1hvnU6dw51WwR7zAf7txq+Brj6e75DK/M+6c1BwtDG5fhPb9eb9M71BamHSILAni9ZfpJ0kSJGd5OriGW9xc8gBmdNBVttKcBDc2Fjc8lGZrHdFNgf2lL/aOKW8CkrgoGHs7gNjO6nUsRkDy4gLWlLA6sl6MGzRm4+gXkkradmMi5Og91SxdK8RN7eF2biZo9RIQVuOYsrA+tX/AEd6cgyjDzpLBIdIsQpUn/lse14G1+FdEGDyqt290ehxUZinQMuoOjI3BkbVWHMU6PBKYNtES13O5+4JzS//AMnOT/cAIUlJQRcG4Ne71Zro1iJY2kweIbekhsVk+uha+5L97Iqw+kt+Iq/3qQyY43ljxmMj87dUxYWvaHN0Ke3qQ86jUgeJAqt2vtHq1OYXIsWJACqNWJOn+lYJOkGLxRJ2fgpMQn18hEUbG9vZL23tDxB7q8ibNM7DE25GvIKxDGNxSOsNu1dQSUHQg+BvVdtLZKyyxS33Xi3swO0rKRuHuvY+XfWBbbmPwnt43Z0kcY1lw7rIEHNgpNh3lhW12FtuPExrJHIJEOjDnyYaq3ca8nbNBlOy18uYz2uN1GOY/OJ1/VJkQg2NMEsrK6HddDdT+YPNSMiKs8alxvcR+VQWFJnYoZOqdMwUwY4PGfitjsjaC4iMOMjoy8Vcaqf68QRVhWC2Xjvm8wcn+7eyy93BZP1ePcTyreA13PD6wVUIduMj3/tIqqn6F9hodF7RRRRyGRRVTi9txISq70jDIrGAbHkWJCg91791Mtt1hmcPIB4rf42HxoV9bTsOFzxfv07+S1bBI4XA+eKvKKrcDtiKU7obdf6Dix8uDeRNWVbxyNkbiYQRzGao5pabOFkUUUVdVRRRRUUWT6RRbs4fhIgA+9GTceYYfhNNQmtDtnBddEVHaHtIeTjTyOYPcTWWgluAdOYOoIyIPeDlXIcYpzFUdLs/1Gv6Telkxx23HwKyjavWPKoqyV60tAiUWV8GaebEkVChm3Zon/4qjykPVn9+/lRI9Rx7TxgcZYv/ACLVYpnGePscPULURjCe4rV7dxxggZx2uyn32yXyBz8AaxMMe6ANbcTqTxJ7yc6u+l2I3pI4uCKZD95rovw3/WqhaYcdqMc/RjRvqVXh0eGLHu70UnA5N5VaRMvEnyqoWnlkPOlUM+AWstZWYjdW3Ug6N60zIpXWq+TFbmZLeSs37oNeja6aFwL/AEwV/etRXTNcPpI9FgI3DtVR00VpIeoQkNiHiw4I4LK4Vz5JvVpNubRTZ2FQRRhnO5h8NCMgz2sq5aKoBJ7hVHth935vNqseJgYkaBS/Vs1+QD38Aad6eSEY7AX0WPEOv/MD4cX8QD8TXUf02wSRkblxv5A5pTxN2A4tgPdUe38NtLDBJ8ZtJojI26u4wSJXILCPd3d3QHtX7OprU9DdvyzM2ExdjOib6SKLCaK4UtujIOpK3Ay9oEcQOJfKP8os+0kTDPEkSQyFmCkktIoZAc+yAC2XfrWz+TTFO/8AZLMbsZcRFfiYlgxGR7v7uP8ACKfiQTMILQCBcEC3ggH3Y9udwTay23S3DmOfCYhRmJGgc/8ADmQsP+5HH6nnUu9OdOv0K/8AyMN/54/4XpCDIeArjeOZVDSN2j1ITmhyi8T7LObV2b89xUWEa/VtvTzge9FCUVYieAZ3UnuRq0uL6Q7NwjCCXExRsoA6se4LZBgoO4LW1tVF846jEYufesRg4lQ2vuk4iVSwHGxeM+Qqv+U3ZWF2dgBPAiCTrEX+8LOZ98nfuxa7Oc33u4064G2JtK0uJAN7kC+d+3a1vBCVoLpj2WsOxdJw3VSoskTq6MLq6EMrA8QRkRXPOlXRo4B22hgUITtYvDJ2ZI/eljXRZF1sMjn33qPkx2+sckLRXXD4tzFJCTcQ4m3ssvLeICnnvKeFdjxCXFMKqBpvG/rNI8wfngUNG63XZkQsdhMUssaurBldQwYaFWFwfQimGWq/YuG+bS4jBjsQyB4RygnBdF8FfrUHcgq0evnNbEYpDG7Vptf0PiLFdHTyY2B43UV0ByOYrTdE8YXhMbG7QncvxKWuh9MvFTWcIqX0fn6vFKOEqmM/eW7r+Tjzovg1T0VSGnR2X4XtbHjhPMZ/lbaqDF4hsRIYYyVjXKRxqx0KKeAGhPE3HA1N27izFCSpszEInczcfIXPlVZsdgkdhz/IZV0HEavC9sANri5525DvP2ulUEfVMngPz4bK0w2EjiACAC3rTrTCq58T3020ppf/ACWsbZgsOxX6FzjclQNrwKXyGRsbDgeYtoeOVWfR7aLPeKQ3dRdWOrJpn9oGwPiKrJ6TstrYmK3Esp8DGx/NR6UHQVTo6wYdHmxHfv4IqWMOhsdQMlsqKKK7JKEUUUVFEVjtuQ9VObdmQb4+8DZ/5T4sa0+NxkcS70jBRw5k8gBmT3CshtvaJxDKUXcCbwBaxY71r+yMl0HE+FJuNuhNOWPcA7Ijn8tfNHUDX9JcDLf53pAloecDUgeNQRhQdSzeJNvQWHwqVhdnIeCgdyi9cg0XNgSnDg0C5TUmNT6a/iH9an9G4hLiAQQREC5sQfaYFVHxc+QqRHs6LkfX/Sh9iRNobHgSAbfxo+kiMUrZSMVje1wPZDyyscwsBIvvZV20pd/ETN9vcHhGAv571NrT2J2JLHdkO8LknVhmbkkH2gaiQzZ7pG63LgfA8aGq8bpXPcLXJKIiLcADTcAAKStOim1pYNqFC8KdRCdKVNhGtkfK9RpMdundzJ+ioJNuZA086S2NIzKyAcylx+ySa1bCzXCSfJZ2cDcKBicIh3kZLBgVYD2bgixvbJvMGkdJFlmw8dvakwx34pNCRu7rxy9zL744hSQBep4mWUXDBrctR4jUU/Cts6JpeJz0MgdGTlsV5UQxzMs8LnXRramz8JjJcRiIfbmjKtDIikq7EEsgbKz531vfI2Nq3Hyf7GbrBi3iMEMaNHhYWBDWcjflZTmMgFW+dixOoq0wWJ6lx9Uxtb6uQ6MvJWORHAkHiatMbtFUUu7BVUXZmIAA7ya+g0nEIq2HpImht/qz+WBK5qoh6B4abm30+nnsqvpdiN5sPENWl6wj7ESk3/GYx51LVbCqLZZbEztimBCZLEGyIjU3BI4FmO8RyCg6VoL1yXEpRPUuc3QdUeGp87+Sb08RjiDTrqfHbwCzHS3BswupA6xHw5J0DS7rQse7ro4R+sa5Z012PPiZo8QnWNBMVBADN83kNllVoxmtiCT3giu543CpKjRvmrAg+fI8DWaj2EZpHRcQcNiwLyXUPFikFgMSEupEhFg5UjPUG4NNuBVDMBppTbO4Ovf7oOvidcTM1GRvyVLJ0Uh2e+FwmGmMzTYzDy57t1KSRsx9nK26jN4Cu0StYVjei3QxMJL85mmOInsVViu4kYPa3EuczoWJOWQtc3u9pbSRB7bKo0Fzb050+mLSWhpyaLXOV87+GqCHVvzOwWV2j/6lIw44SEHxE2It8CalVWw4kNPPNJdQzKkd1a3VxjIk2sLsXPgRVkCCLg3HAivnnF3iSse9umQB52AC6GjjMcDWnW3qm2qPNNuWk+rZZPJWBPwuPOpLUxiEurDmCPUWpdG8scHDYg+SOaL5FaLpY+cI4XdvMAKP3jVdA9qe2reTC4WX7Khv14x/MAPOq+J6bcZJbWYuYHzzugqVv9m3In1VpG9KaSoSyV6ZaDE2S96NKlapPR6DflMnuxgqO92AvbwX9/uqukcmyrmzEKo5sdPLie4Gtfs7CiGNY1z3RmeLE5sx7yST50z4NTdNN0x0bp3/AKGfksauTBHhGp9FLooorrUpRVdtjaSwJvEbzHJE4sf4Aak1OkcAEk2AzJ5CsccT10hnbs6RKeCjTLme0fEDhQHEKz+NHl9RyHue4fhEU0PSOz0GvsPFIMTOeuna7HQaADkB7q/E8abka+mQ5V7NIWOdeha4mWUyOJ56k6nvTlot+Nh3JAWnIzalBa93aza22a9JunUkqTHLUPdoBIolkpbqsnMBVtFPUbaWzEmBPZbW4yue+2h76iriLU+mNXibetFtqGPGF6w6NzXYmqlhLKxjftD4jn46X8QeOUla825IrESLqouT4aj0uKUtLpGta4hpuPnzvujQS5ocd17DEFvYWubnvJ4mn46bU04tWGao5VowyhuqcaXMTjJgvFQwzBX8rd9SsMhUEM29nkbAG3C9sr94t4U5jMOJEI46qeIYaEVmtj9KI5WaKQ7kqEhgcr294d1EWc9pNr21XrAXhaOaMMrKdGBB86qcFseNwryF3YcJHdwGBsSocm2Y1FWXWUdZVWSljS1uQOwJAKt0e6lRkKLDICldZUTrK96yoJFXo1K6you0cGswFyVdDvRyIbPG3NT+Y0IyNHWUlyCCDmCLHwNWbMQbg5rwxJjCbUxTBkZoyFy69QbNztEct/vBK/lTLMFJIuWOsje058zoO4ZVMsMhoBkANBUdpMzuR3scyx3RfuuCT6Wq9XW1FVYSOyG3udl5T08UJJY3X58GnYvIZWPEmnoYgt7C1zc20vztwpGH2mStzG27cjeUBlyyuLe1bvtT0cyuLqQR3flQD2Fq2Lr7WSWqNLMAbankMz58B509DE87bseSjV9PQ8B368udXmD2XFENAx79PIf1raCkfJnt2/M+5UfO2PI5nkqvDTzvhlw4iFgoXfuzZg3BAAABGXE6VH/s7ED6P4f/AN1pJZ6iyT0fU/3LdI69shkB7IeKUtvgaBfPc+6oXEy6hfQr8c6ScS41Q+KkH+h+FWmIkuLGoZjpU8NBsEWx1xmFM6L7sk9736tCbaEMx3QbHPTe9a2dc/SAEg3KsOyRcEeBGYq52ftt4yExGansy/57ZW+0PMca6Tg9fCyMQuGHPXYknfkdhdLq2Bz3Y255ab5cua09FFFdIlaouleItCIxrK26fuAXf1A3f1qoL5AcqndJpL4gLwSMesjG/wAEX1qClcVxucyVRbs0Ae59U7o48MI7c0pVp/cow2tT8St4yQLsouALXPdnQcMGNpI1VpJLEBQlWm5MQimzMAeV8/TWvFw7N+kb9RCQPNtW+A7qlQwKuSqFHcAKsGBeF1lE+dA9lJG/UK/F7CgNIdIW82X+UmrFLCn1lrdsTTqqF5GgVM0c/wBUPxH/ACUy8jjWNvIqfzINaNZa9Yq3aAPjVjSMI6rvP9LwVBGoWSxMyspQdpvZCkEHPImx4AXN+6pq1Y43ZSOMvQ6X7jqD31TpvI3Vve/uk8QNQe8ZeI86ClgdHqPf53eV0QyVrxkpa04pppTS1NUaVCE8K5P0vc7P2pHilW6Md4r9JSN2ReWakgeFdWBrG/Klsgz4QyKLtEd7y4/x9aZcOm6Kdp2OSqNxzWoTZ0ciLLhn3UcBl96NgRcEDVfI+VRpYpU7cZt9KP219B7Q9K5b8nPygnAEQTgvhmN8s2hJ1ZRxU6lfMZ3B71s3Ew4mNZoJEljbRkNx3g8iOIOYroqjhVLUda2E825fbRLRVVFOcJOIbX/OqySYlTkGF+V8/TWnN6tZiNnI/bRW+8oP51Efo9B9WB90sv7pFK3/ANOvv1JB4g+yKbxVh+phHcR+lnt6vd+rw9HYfot/1JP81cZxeMkxm0HhwsjCAvZbE23Fspe+tmIvf7VDycDljbie9tvFF09WyckNBy52/K6M+LUG17n6Izb8IzpSwPJ27on0b+03cbdkfHwqXgcGsKBEGQGvEnmTTrUpyborukvokAACwFgMgByqJjD7oyLnMjWwGZ/IedTCahz9tD3Mvmd1h+6ayvmvGhX+DKxxhVtpnbibUiXEjnVMuITgb/dBb13QbU4MQPov+Bv6UZ/JeRYNssOgF7kqa8/KmiSaZGJXiHHjHJb13bUuPExk2DrflcX9NayIc7VXtZelaQVqSVpBWsyxehyjkU9G4Ybj5jnyrxlpDCqAlhurHrBW3R7GFG+bOb2F4jzUap5ajuuPdrR1hJZDYOvbjIZT3jh4cPAmtnhMQHRZBo6hh5i9djwes6eIsJzb6HTy0SqthwuDxv6/vVZHbJviZu4oPLqkP8TTSin9tLbFSd+43qgX+Q00tcxxAH+XJf8A+imcX/qb3D0TqVZ4V8vKqxKfRjXsEmArKVmIWTiinVFNrTqmtWLNyGWm2FqeY005qzrLwFJD0sS0w9Nsay6UhaYLqeJaqdvnsvxBB8gQD8CwpbTMONQce5awOZZgPIG7fAGqyVGMYVpFFhddSBSwaaBpwGg2lakJ0GvJow6lG0YEHwNJBpQNatcqWXBOkPRTERTyqiFlVjax4HPSq7Yu3cXgJN7DyvE3vAdlrcGQ+y3mK7h0kwRsJ4+0vaA4rz8v96VgulmzIcRGJRZZAfatxHFrcxXWUNeZWAu7j87VqaFk8eKPXcbX9r7K92H8ubABcZhd4/TgNr/4b5ftVoB8tmzrX6rE3+juR/n1lq4ziuik6J1gAdOa8PEa1ULHTITA6FL3cOLTZ4sumdL/AJVJsYjQYaMwRMCHYm8rg+7cZIDxtcnnT3yS7P8A0k5Gnsr/AF/OubItq7f0FwPU4NAci3tHzpRxeciG19ckc2FsMeFo1WhJpDGgmkk1yriqgJEkgAJOgFzRhNmtN7T5LwU6eY94/AfGmMXmVXm1z4KCfztWhRwAAOAremja83cqyvc1ow7r2HAxqNL+OnoKeBUaADyFRzNTbS0wD2MFmgBBljnfUVKZgeAqLPEjZEDwOY9DXlyaWqVm5+PZWDcKhfMEHZBT7h3R+HsnzFNt1ia+2vMABx5aN5W8DVkVpthWTgtQ66MNCpTfOYOnhUKdbHKrXEtYAchaqqSq1TWtAaNlISTmVHetB0UmvCU+g7Dyazj963lVA9W3RI+3MO6NvM74/lFE8Ckw1YbzBHv7KVovATyt+PdJ6VQWeOTgymM+I9pfhv1Vqa1u1sH10TJodVPJ1zU+F/hesfE1xmLEXBB1DA2KnwNxV+O0xjnEo0d6j9KtFKHRYdx6KShp5WqOhpwGlLSiCFOhUGmZsWqEoblh7qgse69tPO1KwrVJxoyDc8jTBtjHi5IY5PsVB66VtEVfvm5/CuX7VKGDmbWUD7qqP3t6lB7Urr6q17f8l6QdgmjsuT69v+1/9dMTYOdfe3vvKD8UIt6VNGJ76UMX31CIXZD2KmKQKkOKtk62JyFvaDHkuV791qscJs5h7cgsxFguXsLrY/aOV/ADhct7UCOveeI+B8QbVI2HtQSoFcjfta/BiMiPGpSsixkOOex2z9CdPtutJC8sxNGW/wA5KHiId3wpsGrvEQVUzwFdNKwqqUxm7dFeKTEEgGlg01evQaDDlpZO65VjekWwGQmSIXQ5lfo/6Vr71H65l1zomnqHwuxN/wBrSJ7o3XaucYPFmLIZgCxB4jkazG3oFD7yiwbh311/FbKw0ubJY8xl/pUUdFsHcFlL20DEEelqcs4tEMy03RbqkPaQQsB0L6NviZVdgREpBJPvcgP9/wAa7AoAAAyAyHgKjQlVskagAchYCnr0prKx1Q+5yGwQbyXJRNJJpJNeE0EVAEziDYq3ANn4MCPzIqakzaXqG+eR0OtN4adgAN0sCSEa4AbdtvXPIXA3rWPjWjGuIu3bXuUe3IK1VyeNOrUaDAzNmW3R9kAfFgSfGwqWuyTxlb8R/pRccTyL2QrnsGpTq06pqMdnuOzM3gdwj4rf403eZddx/VD/ADAn0rfCW6rHI6FTWpl6aixYYhSCrHRWGvgRkfI0/OoHjVXAkXXuhsmZJCajvS2amnNCSOvqiGCyaerbokvtTN/y18wGb+YVUOa0nRjD7sAJ1kYyeRsF/ZC0x4DHiqsWwB++Q91jWutCRuSPyrisx0i2cVJnQZH9KB3ZCQeAyPcAeBvp68NdVVUzKiIxv0P27UqildE7E1YRGp5WqZtbYrRkyQgsmrRjVe9BxH2fTlVXFICLg3rhqqklpH4JB3HY/NxsnkcjZRib/pS0ktTjzk6nSogalBqyEpta6hYDmni9JLUjerwtXhevcKUWptmpJam2fMKASxyVQLsT3D/dqobuNhqrgLyVjkFF2YhVHNjoKuMb0asimEgSIqqwOSy7oAueTfa9e6XsTY5jPWy2MlrBRmIxyB4tzPkOJN9XWcO4S1kDhOM3ajkBp47pZUVhxjojp91jMBtcgmOYEMuR3h7S/eHEd4+NT5owRcZg6GrLamyYpx7Ysw7Lrk6+B5dxyrOz4PE4Uk26yPmgJy+3HqPFb+VY1FHNCLZvZz/yHeN+8Zq8ckcv09V3LY934SJ4LHKmL1Kh2hHIL3A87j1pE8PEUhmhaetGbo5jiMnCyY3q9vTRNG9Qq2wr1oh4UnqRzr3eo3q9uVLJQAGlelqQWpJNeL0NSy1Ns9szkOdeYcNKd2FDI3Hd7I+85yH591aLZnRoAh8QRIwzCD9Gp8Dm57z6CmFJwyepOQs3mfbn8zWM1RHCOsc+W6q9k7HfEWZrpD5hpe5eKp36nhzp3FsFncWAWPdjVRoFWNWAA8WJrZ1lOk2EKSdcOw9g/wBlxkrHuIsPFRzp5XcPEFERDqCCeZt+DnbRL4akzTdfQggDlp6o+fDvo+d+NVqtTqtXOCped0YYWhTevNG/UUNSw9W6UnUquAKwwXvNyyHnUfEvTAlI0NNs9XdODGGBVbHZ2Jek00xoZqaZtAASxNlUak8hQpu42C3A3S4MOZpFiHvdo8ox2j/Ad7Vt0UAAAWAyA7hVdsXZvVKS1jI9i5GmWiD7IufG5PGrWu14XQ/xYet9RzP48PW6T1U/Svy0Gnv85WRRRRTNCoqn2hsKOUlgSjnVlt7X3lOTeOvfVxRWckTJW4HgEcirMe5hu02KyE+xcSmgWQc1Nm/C+X7VQ5IpV7UMo8I2b4oCK3dFKJeA0rvpLm9xv6g+qMbXyD6gCsIFk+qm/wCjN/lpceCnbswP4ndQeYYg/Ctvavao3+nqcHNzj5fhWPEHbNH3/SyuH6OzN+kdUHJLu3qQAPQ1d7P2ZFCPYX2jq5N2PieXcMqn0UzpqCnp8422PPU+aGlqJJMnHLkiiiii1giiiiooqrH7BglO8U3XPvod1vMjted6p5+jMy/opVcfRkBU/iTI/hrW0UJPQ082b2i/PQ+YW8dTLHk05cjmFgpdm4pe1Ax70ZGH5g/CmGjkGsMw/wAGU/ELXRKKWu4BTk5OcPI+oRbeJvGrQudbjnSGY/4Mv+Wno8DiG7OHk/W3EH7TA/Ct/RUbwCAaucfL8KHib9mj7rGQdHcQ3aMcY8Wkb0Fh8atML0WhGcpaU8mNk/AtgfO9X9FHQ8MpYc2sz5nP1Q8lbM/e3dl+/umoolUBVAUDQAAAeQp2iij0Kim5YwwKsAQRYg5gg6ginKKiix+0tivES0YMkfIXLp5auvx8dagRTAi4Nx3Vv6rsZsiGU7zIN76S3VvMrr51z9ZwJkjscJwnlt4cvJMIa8gWkF+3f9rKhqVv1bydGvoTMO51DflummD0em+nGfJh/WlD+DVjTk2/cR72RgqoT/l53VeXpBarNejsx1kjHgrN/EVMh6NR/wDuO79wO4v7Ofxq0fBax56wA7yPa6q6rhbvfuVBCrSNuRqXbiBoo5s2ij48ga0uydkLD7bHfkIzbgo+ig4Dv1PoBYYbDoi7qKFHJQAPhT9dBQcKipeues7ny7h76oCoq3S5DIfNUUUUU1Qi/9k=";
    } else {
      return "data:image/jpeg;base64,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";
    }
  }
}
